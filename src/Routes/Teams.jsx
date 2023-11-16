import React, { useEffect, useState } from 'react';
import TeamsLogos from '../assets/assets.jsx';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [selectedConference, setSelectedConference] = useState('East');
  const [isLoading, setIsLoading] = useState(true);

  const getTeams = `https://www.balldontlie.io/api/v1/teams`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  };

  const getLogoSrc = (abbreviation) => {
    return TeamsLogos[abbreviation] || TeamsLogos.unknown;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getTeams, options);
        const teams = await response.json();
        setTeams(teams.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleConference = (conference) => {
    setSelectedConference(conference);
  };

  const renderConferenceTable = (conference) => (
    <table className="border-collapse border w-full">
      <thead>
        <tr>
          <th colSpan="7" className="bg-gray-800 text-white px-4 py-2">
            <div className="flex justify-around">
              <div
                className={`cursor-pointer text-3xl ${selectedConference === 'East' ? '' : 'hover:text-blue-300'}`}
                onClick={() => toggleConference('East')}
              >
                Eastern Conference
              </div>
              <div
                className={`cursor-pointer text-3xl ${selectedConference === 'West' ? '' : 'hover:text-blue-300'}`}
                onClick={() => toggleConference('West')}
              >
                Western Conference
              </div>
            </div>
          </th>
        </tr>
        <tr className="bg-gray-400 text-white px-4 py-2">
          <th className="py-2 px-4">Logo</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Abbreviation</th>
          <th className="py-2 px-4">Full Name</th>
          <th className="py-2 px-4">Division</th>
          <th className="py-2 px-4">Team Conference</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(
          (team) =>
            team.conference === conference && (
              <tr key={team.id} className="border-b">
                <td className="py-2 px-4">
                  <img src={getLogoSrc(team.abbreviation)} alt={team.name} className="h-8 w-8 object-contain" />
                </td>
                <td className="py-2 px-4 text-center">{team.name}</td>
                <td className="py-2 px-4 text-center">{team.abbreviation}</td>
                <td className="py-2 px-4 text-center">{team.full_name}</td>
                <td className="py-2 px-4 text-center">{team.division}</td>
                <td className="py-2 px-4 text-center">{team.conference}</td>
              </tr>
            ),
        )}
      </tbody>
    </table>
  );

  return (
    <section className="mx-auto max-w-screen-lg py-10">
      {isLoading ? (
        <div className="text-center">Sæki gögn ...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="border-collapse border w-full">
            <tbody>{renderConferenceTable(selectedConference)}</tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Teams;
