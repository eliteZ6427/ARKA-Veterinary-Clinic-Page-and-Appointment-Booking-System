"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/db"
import { bookings } from "@/db/schema"
import type {
  bookingSchema,
  getBookingSchema,
  getBookingsSchema,
} from "@/validations/booking"
import {
  and,
  asc,
  desc,
  eq,
  gt,
  gte,
  inArray,
  like,
  lt,
  lte,
  not,
  sql,
} from "drizzle-orm"
import type { z } from "zod"

export async function filterBookings(query: string) {
  if (query.length === 0) return null

  const filteredBookings = await db
    .select({
      id: bookings.id,
      name: bookings.name,
      type: bookings.type,
    })
    .from(bookings)
    .where(like(bookings.name, `%${query}%`))
    .orderBy(desc(bookings.createdAt))
    .limit(10)

  const bookingsByType = Object.values(bookings.type.enumValues).map(
    (type) => ({
      type,
      bookings: filteredBookings.filter((booking) => booking.type === type),
    })
  )

  return bookingsByType
}

export async function getBookings() {}

export async function checkBooking(input: {
  // date: Date (?)
  // time: string (?)
  // type: string (?)
}) {
  const alreadyTaken = await db.query.bookings.findFirst({
    // where: TODO
  })

  if (alreadyTaken) {
    throw new Error("Wybrany termin jest już zajęty")
  }
}

export async function addBooking(input: z.infer<typeof bookingSchema>) {
  await db.insert(bookings).values({ ...input })

  revalidatePath(`/rezerwacje`)
}

export async function updateBooking() {}

export async function deleteBooking(input: z.infer<typeof getBookingSchema>) {
  eq(bookings.id, input.id),
    await db.delete(bookings).where(eq(bookings.id, input.id))
}

export async function getNextBookingId(
  input: z.infer<typeof getBookingSchema>
) {
  const booking = await db.query.bookings.findFirst({
    where: eq(bookings.id, input.id),
    orderBy: asc(bookings.id),
  })

  if (!booking) {
    throw new Error("Nie znaleziono rezerwacji")
  }

  return booking.id
}

export async function getPreviousBookingId(
  input: z.infer<typeof getBookingSchema>
) {
  const booking = await db.query.bookings.findFirst({
    where: lt(bookings.id, input.id),
    orderBy: desc(bookings.id),
  })

  if (!booking) {
    throw new Error("Nie znaleziono rezerwacji")
  }

  return booking.id
}
