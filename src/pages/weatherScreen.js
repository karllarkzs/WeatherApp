import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import { useAuth0 } from '@auth0/auth0-react';

function WeatherScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const { isAuthenticated, logout } = useAuth0();
  const [data, setData] = useState({});

  if (!isAuthenticated) {
    navigate('/');
  }

  const fetchingWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=1&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    fetchingWeather();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center items-start h-screen">
        <div className="container mx-auto px-5">
          <h1 className="text-center my-4">Weather Screen</h1>
          {data.list && data.list.length > 0 && (
            <div className="container mx-auto mt-8">
              <table className="table-auto mx-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Temperature</th>
                    <th className="border px-4 py-2 hidden sm:table-cell">
                      Description
                    </th>
                    <th className="border px-4 py-2 hidden sm:table-cell">
                      Main
                    </th>
                    <th className="border px-4 py-2 hidden sm:table-cell">
                      Pressure
                    </th>
                    <th className="border px-4 py-2 hidden sm:table-cell">
                      Humidity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">{data.list[0].dt_txt}</td>
                    <td className="border px-4 py-2">
                      {data.list[0].main.temp}
                    </td>
                    <td className="border px-4 py-2 hidden sm:table-cell">
                      {data.list[0].weather[0].description}
                    </td>
                    <td className="border px-4 py-2 hidden sm:table-cell">
                      {data.list[0].weather[0].main}
                    </td>
                    <td className="border px-4 py-2 hidden sm:table-cell">
                      {data.list[0].main.pressure}
                    </td>
                    <td className="border px-4 py-2 hidden sm:table-cell">
                      {data.list[0].main.humidity}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center my-4">City: {data.city.name}</p>
              <div className="flex justify-end">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-50 sm:w-50 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    window.history.back();
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherScreen;
