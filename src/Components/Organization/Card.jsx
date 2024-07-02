import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';


const teamMembers = [
  {
    name: "devendra",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Yogendra Singh",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "123456",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: "735756",
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: 735756,
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: 735756,
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: 735756,
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "Kritika Paliwal",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: 735756,
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "aasish",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: 735756,
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  {
    name: "dev",
    role: "UI/UX Designer | Location",
    department: "Design",
    phone: 735756,
    email: "kritika.@deeporion.com",
    image: "./alx.jpg",
  },
  

];




// const yogi = teamMembers.find((item) => item.name === "dev" );
// console.log(yogi);

const Card = ({ name, role, department, phone, email, image }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden border bg-white p-4 m-4">
      <div className="flex items-center">
        <div className="mr-3">
          <h2 className="text-xl font-medium text-blue-800">{name}</h2>
          <p className="text-sm text-orange-500">{role}</p>
        </div>
        <img src={image} alt={name} className="w-12 h-12 rounded-full border-2 border-blue-950 ml-16" />
      </div>
      <div className="mt-4">
        <p className="text-sm">
          <strong> <ApartmentIcon className='mr-2'/> </strong> {department}
        </p>
        <p className="text-sm">
          <strong> <CallIcon className='mr-2'/> </strong> {phone}
        </p>
        <p className="text-sm">
          <strong><EmailIcon className='mr-2'/></strong> {email}
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ml-2 p-4">
      {teamMembers.map((person, index) => (
        <Card
        key={index}
        name={person.name}
        role={person.role}
        department={person.department}
        phone={person.phone}
        email={person.email}
        image={person.image}
        />
      ))}
    </div>
  );
};

export default Team;
