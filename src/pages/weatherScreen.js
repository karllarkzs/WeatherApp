import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import { useAuth0 } from '@auth0/auth0-react';

function WeatherScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const { isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState({});

  if (!isAuthenticated) {
    navigate('/');
  }

  function isBackButton() {
    navigate(-1);
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
      });
  };

  useEffect(() => {
    fetchingWeather();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center items-start full-height">
        <div className="container mx-auto px-5 text-left">
          {isLoading && <p>Loading...</p>}
          {!isLoading && data && data.list && data.list.length > 0 && (
            <div className="container mx-auto mt-8">
              <table className="table-auto mx-auto ">
                <thead>
                  <tr className="bg-zinc-200">
                    <th className="border-2 border-black px-4 py-2 border-b-0">
                      Date (mm/dd/yyyy)
                    </th>
                    <th className="border-2 border-black px-4 py-2 border-b-0">
                      Temp(F)
                    </th>
                    <th className="border-2 border-black px-4 py-2 hidden sm:table-cell border-b-0">
                      Description
                    </th>
                    <th className="border-2 border-black px-4 py-2 hidden sm:table-cell border-b-0">
                      Main
                    </th>
                    <th className="border-2 border-black px-4 py-2 hidden sm:table-cell border-b-0">
                      Pressure
                    </th>
                    <th className="border-2 border-black px-4 py-2 hidden sm:table-cell border-b-0">
                      Humidity
                    </th>
                  </tr>
                </thead>
                {data.list.length > 0 ? (
                  <tbody>
                    <tr className="bg-zinc-100">
                      <td className="border-2 border-black px-4 py-2 border-t-0">
                        {new Date(data.list[0].dt_txt)
                          .toLocaleString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric',
                          })
                          .replace(',', '')
                          .replace(/(\d) /, '0$1 ')}
                      </td>
                      <td className="border-2 border-black px-4 py-2 border-t-0">
                        {data.list[0].main.temp.toFixed()}
                      </td>
                      <td className="border-2 border-black px-4 py-2 hidden sm:table-cell border-t-0">
                        {data.list[0].weather[0].description}
                      </td>
                      <td className="border-2 border-black px-4 py-2 hidden sm:table-cell border-t-0">
                        {data.list[0].weather[0].main}
                      </td>
                      <td className="border-2 border-black px-4 py-2 hidden sm:table-cell border-t-0">
                        {data.list[0].main.pressure}
                      </td>
                      <td className="border-2 border-black px-4 py-2 hidden sm:table-cell border-t-0">
                        {data.list[0].main.humidity}
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center">
                        No data
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
              <p className="text-center my-4">City: {data.city.name}</p>
              <div className="flex justify-end">
                <button
                  className="text-black bg-white border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  px-5 py-2.5 text-center"
                  onClick={isBackButton}
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
