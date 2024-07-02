import React from 'react';
import Statusbar from './Statusbar';
import Card from './Card';
import Searchbar from './Searchbar'; 

const OrganizationTeam = () => {
  return (
    <div>
      <Statusbar />
      <div className="border rounded-lg shadow-2xl m-9">
        <Searchbar />
        <Card />
      </div>
    </div>
  );
}

export default OrganizationTeam;
