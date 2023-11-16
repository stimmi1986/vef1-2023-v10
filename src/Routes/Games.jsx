import React, { useEffect, useState } from 'react';
import TeamsLogos from '../assets/assets.jsx';

const Games = () => {
  const [games, setGames] = useState([]);
  const [setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  const startDate = new Date(today.getTime() - oneDay);
  const endDate = new Date(today.getTime() + oneWeek);

  const formattedStartDate = startDate.toISOString().split('T')[0];
  const formattedEndDate = endDate.toISOString().split('T')[0];

  const getGames = `https://www.balldontlie.io/api/v1/games?start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
  const getTeams = `https://www.balldontlie.io/api/v1/teams`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(getGames, options);
        const gamesData = await response1.json();
        setGames(gamesData.data);

        const response2 = await fetch(getTeams, options);
        const teamsData = await response2.json();
        setTeams(teamsData.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  });

  const getLogoSrc = (game, teamType) => {
    const team = teamType === 'home' ? game.home_team : game.visitor_team;
    const teamName = team.abbreviation.replace(/\s+/g, '');
    const logo = TeamsLogos[teamName];
    if (logo) {
      return logo;
    }
    return TeamsLogos.unknown;
  };

  const formatGameStartTime = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    const formattedTime = new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${formattedDate} @ ${formattedTime}`;
  };

  return (
    <section className="container mx-auto max-w-screen-lg py-10">
      {isLoading ? (
        <div className="text-center">Sæki gögn ...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {Array.isArray(games) &&
            games.map((game) => (
              <div key={game.id} className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-800 text-white px-4 py-2">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                      {game.home_team.name} vs {game.visitor_team.name}
                    </div>
                    <div className="text-sm">{formatGameStartTime(game.date)}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img src={getLogoSrc(game, 'home')} alt={game.home_team.name} className="w-8 h-8 mr-2" />
                      <div>
                        <div className="font-semibold">{game.home_team.name}</div>
                        <div className="text-sm text-gray-600">{game.home_team.city}</div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold">
                      {game.home_team_score} - {game.visitor_team_score}
                    </div>
                    <div className="flex items-center">
                      <img src={getLogoSrc(game, 'visitor')} alt={game.visitor_team.name} className="w-8 h-8 mr-2" />
                      <div>
                        <div className="font-semibold">{game.visitor_team.name}</div>
                        <div className="text-sm text-gray-600">{game.visitor_team.city}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm">
                      {game.time} {/* er að vona að tíminn á leiknum verður display-aður */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default Games;
