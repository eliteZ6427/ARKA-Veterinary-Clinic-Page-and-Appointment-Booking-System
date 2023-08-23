<div>
  <h1 align="center">ARKA</h1>
  <h3 align="center">Veterinary Clinic Landing Page and Appointment Booking System</h3>
  <p align="center">
    <a href="https://github.com/pjborowiecki/ARKA-Veterinary-Clinic-Landing-Page-and-Appointment-Booking-System.git/issues">Report Bug</a>
    ·
    <a href="https://github.com/pjborowiecki/ARKA-Veterinary-Clinic-Landing-Page-and-Appointment-Booking-System.git/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#feedback-received">Tech Stack</a></li>
    <li><a href="getting-started">Getting Started</li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#todos">ToDo</li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the Project

[https://arka-weterynaria.pl](https://arka-weterynaria.pl)
<br>

![public/images/screenshot](./public/images/screenshots/screenshot.png)
<br>

This project is a re-build of the [Arka Weterynaria](https://arka-weterynaria.pl) website I receintly build with [Remix](https://remix.run/) and [MongoDB Atlas](https://www.mongodb.com/atlas/database) for one of my clients in Poland. I decided to re-build it with the latest and greatest in tech for my own learning purposes.

The original website was desined by me in Figma and built with Remix and MongoDB Atlas. The client wanted a simple website with a contact form and a full booking management system, where he would be able to confirm or reject bookings and notify the client via email. The website is hosted on Vercel. When completed, I intend to replace the original website with this rebuild.

**<u>This project is currently in development. Please check back soon.</u>**

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>

## Tech Stack

- **Framework:** [Next.js 13](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Database:** [PlanetScale MySQL](https://planetscale.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **Authentication:** [Clerk](https://clerk.com)
- **Forms:** [React Hook Form](https://react-hook-form.com)
- **Email:** [React Email](https://react.email)
- **Validations:** [Zod](https://zod.dev/)
- **Hosting:** [Vercel](https://vercel.com)
- **Project Management:** [Jira](https://www.atlassian.com/software/jira)

<p align="right">(<a href="#readme-top">back to top</a>)</p><br>

## Getting Started <br><br>

#### Prerequisites:

- [Node.js (version 18 or higher)](https://nodejs.org)
- [pNPM](https://pnpm.io) (alternatively, you can use npm or yarn)
  <br>

#### Installation:

<br>

1.  Clone the repo

    ```sh
    git clone https://github.com/pjborowiecki/ARKA-Veterinary-Clinic-Landing-Page-and-Appointment-Booking-System.git
    ```

    <br>

2.  Install the required packages

    ```sh
     pnpm install
    ```

    <br>

3.  Rename a `.env.example` file in the project's root directory and fill in the required values. See below for details on obtaining the keys:
    <br>

    - **Clerk:** <br><br>

      - Create a new account with [Clerk](https://clerk.com)
      - _ToDo:_ Complete the setup instructions <br><br>

    - **PlanetScale:** <br><br>

      - Create a new account with [PlanetScale](https://planetscale.com)
      - _ToDo:_ Complete the setup instructions <br><br>

    - **PlanetScale:** <br><br>

      - Create a new account with [Resend](https://resend.com)
      - _ToDo:_ Complete the setup instructions <br><br>

<p align="right">(<a href="#readme-top">back to top</a>)</p><br>

#### Development: <br><br>

1. Start the development server

   ```sh
   pnpm dev
   ```

   <br>

2. Your app should be available at [http://localhost:3000](https://localhost:3000)
   <br>

<p align="right">(<a href="#readme-top">back to top</a>)</p><br>

#### Deployment:

ToDo: Complete the deployment instructions

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Run code linting (`pnpm lint`)
5. Run code formatting (`pnpm format`)
6. Push to the Branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Piotr Borowiecki - [@pjborowiecki](https://www.linkedin.com/in/pjborowiecki/) - hello@pjborowiecki.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br>

<!-- TODO -->

## ToDo

- [ ] Fix urls and paths (dashboard, reservations, settings, etc.)
- [ ] Decide on the type of time slots and update the data schema
- [ ] Fix server actions
- [ ] Implement the landing page:
  - [x] Add navbar
  - [ ] Add mobile menu
  - [x] Add hero section
  - [x] Add about section
  - [ ] Add services section
  - [ ] Add contact section
  - [ ] Add footer
- [ ] Investigate the opacity issue (e.g., /10)
- [ ] Add favicon
- [ ] Add OpenGRaph image (og.jpg)
- [ ] Add robots.txt file
- [ ] Add sitemap.xml file
- [ ] Add site description in siteConfig
- [ ] Improve README

<p align="right">(<a href="#readme-top">back to top</a>)</p>
