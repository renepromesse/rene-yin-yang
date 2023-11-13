import React, { useState } from "react";
import * as aiIcons from "react-icons/ai";
import DownIcon from "../assets/images/icons/Group 15.svg";
import AboutImage from "../assets/images/icons/pencilsketchadjusted-7208867 1.svg";
import Card from "./card";
import Article from "./article";
import { Link } from "react-router-dom";
const AboutMe = () => {
  const [viewArticle, setViewArticle] = useState(false);
  const handleViewArticle = () => {
    setViewArticle(true);
  };
  return (
    <>
      <div className=" top-[43rem] absolute w-full " id="about">
        <h1 className="font-bold text-[28px] font-roboto text-center">
          Who is Rene?
        </h1>
        <hr className="w-32 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
        <div className="flex gap-10 ml-32 mr-10">
          <div className=" w-[40rem] ">
            <img src={AboutImage} alt="" className="w-full" />
          </div>
          <div className="mt-32">
            <h1 className="font-roboto text-[20px] font-bold uppercase">
              Ntirenganya Rene Promesse{" "}
              <span className="font-roboto text-[20px] font-normal capitalize">
                is the best known as:
              </span>
            </h1>
            <ul className="font-roboto text-[20px] font-medium ml-10 text-black list-disc py-3 ">
              <li className="py-1">
                Software Engineer currently working at Codeland s.r.l
              </li>
              <li className="py-1">
                Researcher, currently working on solving the complexity of how
                machines can understand Kinyarwanda
              </li>
              <li className="py-1">
                Founder of KASUKU, a Kinyarwandan Personal Assistant
              </li>
            </ul>
          </div>
        </div>
        <div className="mr-20 ">
          <div className="float-right ">
            <h1 className="font-bold text-[20px] font-roboto text-center">
              Explore More
            </h1>
            <hr className="w-28 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
          </div>

          <div className=" mt-20 ml-32 ">
            <h1 className="font-bold text-[28px] font-roboto text-center">
              What has he done?
            </h1>
            <hr className="w-32 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
            <div className="flex gap-10 mt-20">
              <Card name="card one" onClick={handleViewArticle} />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        {viewArticle && (
          <>
            <div>
            <div className=" mt-20  ">
            <h1 className="font-bold text-[28px] font-roboto text-center">
              What has he Wrote?
            </h1>
            </div>
            <hr className="w-64 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
              <div className="mt-20 ml-32 mr-20 flex justify-between">
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023"
                  like={{icon:null, count:null}}
                />
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
              </div>
              <div className="mt-10 ml-32 mr-20 flex justify-between">
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
              </div>
              <div className="mt-10 ml-32 mr-20 flex justify-between">
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
                <Article
                  content="Writing a Lorem ipum text, one which can be 
translated in Kinyarwanda"
                  date="January 21, 2023" like={{icon:null, count:null}}
                />
              </div>
            </div>
            <div className="mt-10 ml-10">
              <img
                src={DownIcon}
                alt=""
                onClick={() => setViewArticle(false)}
                width={30}
                className="m-auto"
              />
            </div>
          <Link to="/articles">  <div className="float-right mr-20 mt-10 " >
            <h1 className="font-bold text-[20px] font-roboto text-center">
              Explore More
            </h1>
            <hr className="w-28 h-[1px] mx-auto my-4 bg-black border-0 rounded" />
          </div></Link> 
          </>
        )}
      </div>
    </>
  );
};
export default AboutMe;
