## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Structure

hospital-queue-system/
│
├── app/
│   ├── layout.jsx                 # Root layout
│   ├── page.jsx                   # Home page
│   ├── loading.jsx                # Root loading UI
│   ├── error.jsx                  # Root error UI
│   ├── globals.css
│   │
│   ├── user/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── services/
│   │   │   └── page.jsx
│   │   ├── departments/
│   │   │   └── page.jsx
│   │   ├── medicines/
│   │   │   └── page.jsx
│   │   └── appointments/
│   │       ├── page.jsx
│   │       └── [id]/
│   │           └── page.jsx
│   │
│   ├── hospital/
│   │   ├── layout.jsx
│   │   ├── page.jsx              # Dashboard
│   │   ├── appointments/
│   │   │   ├── page.jsx
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   ├── patients/
│   │   │   └── page.jsx
│   │   └── inventory/
│   │       └── page.jsx
│   │
│   └── api/
│       ├── user/
│       │   ├── appointments/
│       │   │   └── route.js
│       │   ├── departments/
│       │   │   └── route.js
│       │   └── medicines/
│       │       └── route.js
│       └── hospital/
│           ├── appointments/
│           │   ├── route.js
│           │   └── [id]/
│           │       └── route.js
│           ├── inventory/
│           │   └── route.js
│           └── dashboard/
│               └── route.js
│
├── components/
│   ├── layouts/
│   │   ├── UserHeader.jsx
│   │   └── HospitalHeader.jsx
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Loading.jsx
│   ├── user/
│   │   ├── ServiceCard.jsx
│   │   └── AppointmentForm.jsx
│   └── hospital/
│       ├── StatsCard.jsx
│       └── InventoryModal.jsx
│
├── lib/
│   ├── prisma.js
│   └── db/
│       ├── users.js
│       ├── appointments.js
│       └── inventory.js
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   ├── images/
│   └── icons/
│
├── styles/
│   └── tailwind.css
│
├── utils/
│   ├── auth.js
│   ├── api.js
│   └── helpers.js