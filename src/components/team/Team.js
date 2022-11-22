import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Team.css";

import Team_Svg from "../../images/team/Team.webp";
import Gdsc_All from "../../images/gdsc-all.png";
import Abhay from "../../images/team/Abhay Rajput.jpg"
import mam from "../../images/team/sonali_mam_photo.jpg"
import Rajat from "../../images/team/Rajat_Deore.jpg"
import Mukesh from "../../images/team/Mukesh Tandale.jpg"
import Vedant from "../../images/team/Vedant Mule.jpg"
import Gawade from "../../images/team/Abhishek Gawade.jpg"
import Sahil from "../../images/team/Sahil shahane.jpg"
import Pritam from "../../images/team/Pritam Patil.jpg"
import Manvi from "../../images/team/Manvi Gawande.jpg"
import Jay from "../../images/team/Jay Firke.jpg"
import Neeraj from "../../images/team/Neeraj Kulkarni.jpg"
import Dhiraj from "../../images/team/Dhiraj Patil.jpg"
import Jadhav from "../../images/team/Abhishek Jadhav.jpg"
import Preeti from "../../images/team/Preeti Hankare.jpg"
import Aditi from "../../images/team/Aditi Hambarde.jpg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";

import Web from "./web";
import ML from "./ml";
import Android from "./android";
import Management from "./management";

import TeamCard from "./TeamCard";

import { Helmet } from "react-helmet";

const Team = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  const WebTeam = Web.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const MLTeam = ML.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const AndroidTeam = Android.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const ManagementTeam = Management.map((member) => (
    <TeamCard key={member.id} member={member} />
  ));

  const [teams, setTeams] = useState(
    window.screen.width < 800
      ? {
        web: <Slider {...settings}>{WebTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
      }
      : {
        web: WebTeam,
        ml: MLTeam,
        android: AndroidTeam,
        management: ManagementTeam,
      }
  );

  const responsive = (media) => {
    if (media.matches) {
      setTeams({
        web: <Slider {...settings}>{WebTeam}</Slider>,
        ml: <Slider {...settings}>{MLTeam}</Slider>,
        android: <Slider {...settings}>{AndroidTeam}</Slider>,
        management: <Slider {...settings}>{ManagementTeam}</Slider>,
      });
    } else {
      setTeams({
        web: WebTeam,
        ml: MLTeam,
        android: AndroidTeam,
        management: ManagementTeam,
      });
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team - GDSC</title>
        <meta name="title" content="Team - GDSC" />
        <meta
          name="description"
          content="Have a look at the great minds of GDSC AISSMS IOIT. None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful."
        />
        <meta
          name="keywords"
          content="gdsc team, gdsc aissms team, gdsc aissms ioit team, dsc, dsc aissms team, dsc aissms ioit team, gdsc ioit team, dsc ioit team, ioit dsc team, aissms dsc team, aissms ioit dsc team, aissms ioit gdsc team, gdsc-aissms-ioit team, gdsc-ioit team, dsc-aissms-ioit team, dsc-ioit team"
        />
      </Helmet>
      <div className="container-fluid team-heading">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 vector-img"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <img
              className="cursor-pointer Team_Image"
              src={Team_Svg}
              alt="Team_Image"
            />
          </div>
          <div
            className="col-lg 6 col-sm-12 team-body"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="font-weight-bold">Meet The Core Team</h1>
            <p className="font-weight-light core_team_text">
              Connect with the great minds who have been working rigorously to
              create a positive impact on the community! "It is literally true
              that you can succeed best and quickest by helping others to
              succeed." – Napolean Hill
            </p>
          </div>
        </div>
      </div>

      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="container team-members teams">
        <Fade up>
          <div id="gdsc_lead" className="row">
            <div className="col-lg-6 col-sm-6">
              <Fade up>
                <h3 className="font-weight-bold">GDSC Lead</h3>
              </Fade>

              <div>
                <span
                  className="Tooltip gdsc_lead_tooltip"
                  data-tooltip="Hi! I'm Prarthana. I love to sleep but coding is my coffee ;) I enjoy problem solving and competitive coding. I'm currently learning Node.js and I'm loving it. Can't wait to meet you guys in a GDSC offline event!"
                >
                  <img
                    src=
                    {Abhay}
                    className="img-fluid lead-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Abhay Rajput</h5>

              <span></span>
              <div className="social-ico">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/prarthana-chandak-2a84b81b7"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/prarthanachandak"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/prarthanachandak"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href="https://github.com/prarthanachandak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
                <a
                  href="https://gdsc.community.dev/u/m84kjc/#/about"
                  className="team-profile-link ml-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Gdsc_All}
                    alt="gdsc_logo"
                    className="team-gdsc-logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 teams">
              <Fade up>
                <h3 className="font-weight-bold">Faculty Advisor</h3>
              </Fade>
              <img
                src={mam}
                className="img-fluid lead-img"
                alt="Faculty_Advisor"
              />
              <h5 className="mt-4">Mrs. Sonali Mam</h5>
              <span></span>
              <div className="social-ico">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sonali-lunawat/">
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
               <img src="../../images/blog_icon.jpg" alt="" />
                <a target="_blank" rel="noreferrer" href="https://sonallunawat4u.wordpress.com/">
                <i className="fa fa-link ico-link"></i>
                </a>

            
              </div>
            </div>
          </div>
        </Fade>

        <div id="web_team" className="row">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Web Team</h3>
          </Fade>
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Web Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/ZVBJQFm/Rajat-Deore.jpg"
              className="img-fluid lead-img"
              alt="Web Head"
            />
            <h5 className="mt-4">Rajat Deore</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rajat-deore-072260220/">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/RajatDeore7">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rajat.72002/">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Tech Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Tech Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/X5j3BDy/Mukesh-Tandale.jpg"
              className="img-fluid lead-img"
              alt="Tech Head"
            />

            <h5 className="mt-4">Mukesh Tandale</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* UI Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">FrontEnd Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/fMvQsJR/Vedant-Mule.jpg"
              className="img-fluid lead-img"
              alt="FrontEnd Head"
            />

            <h5 className="mt-4">Vedant Mule</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vedant-mule-210854219/">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Vedantaz/">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/muley635/">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Backend Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Backend Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/SfvYf2w/Abhishek-Gawade.jpg"
              className="img-fluid lead-img"
              alt="Backend Head"
            />

            <h5 className="mt-4">Abhishek Gawade</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Cloud Head*/}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Cloud Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/jgHN5fw/Sahil-shahane.png"
              className="img-fluid lead-img"
              alt="Cloud Head"
            />

            <h5 className="mt-4">Sahil Shahane</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* ML Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">ML Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/TKSZqPM/Manvi-Gawande.jpg"
              className="img-fluid lead-img"
              alt="ML Head"
            />
            <h5 className="mt-4">Manvi Gawande</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Flutter Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Flutter Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/vXC09bg/Jay-Firke.jpg"
              className="img-fluid lead-img"
              alt="Flutter Head"
            />

            <h5 className="mt-4">Jay Firke</h5>
            <span></span>

            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jay-firke-0aa416121">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/jayfirke">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/jayfirke">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Android Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Android Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/sWf5QdM/Pritam-Patil.jpg"
              className="img-fluid lead-img"
              alt="Web Head"
            />

            <h5 className="mt-4">Pritam Patil</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pritam-patil-621925219">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Pritam1222">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/pp_12.22?igshid=YmMyMTA2M2Y=">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* BlockChain Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Blockchain Head</h3>
            </Fade>

            <img
              src="https://i.ibb.co/0Cj97hk/Neeraj-Kulkarni.png"
              className="img-fluid lead-img"
              alt="Web Head"
            />
            <h5 className="mt-4">Neeraj Kulkarni</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* CP Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">CP Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/wBF2qcs/Dhiraj-Patil.jpg"
              className="img-fluid lead-img"
              alt="Web Head"
            />
            <h5 className="mt-4">Dhiraj Patil</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Management head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Management Head</h3>
            </Fade>

            <img
              src="https://i.ibb.co/hV4LPZb/Abhishek-Jadhav.jpg"
              className="img-fluid lead-img"
              alt="Web Head"
            />
            <h5 className="mt-4">Abhishek Jadhav</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Marketing Head */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Marketing Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/55Q2htY/Preeti-Hankare.webp"
              className="img-fluid lead-img"
              alt="Web Head"
            />

            <h5 className="mt-4">Preeti Hankare</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* Design Head  */}
          <div className="col-lg-6 col-sm-6 teams">
            <Fade up>
              <h3 className="font-weight-bold">Design Head</h3>
            </Fade>
            <img
              src="https://i.ibb.co/MnNX2Yy/Aditi-Hambarde.jpg"
              className="img-fluid lead-img"
              alt="Web Head"
            />
            <h5 className="mt-4">Aditi Hambarde</h5>
            <span></span>
            <div className="social-ico">
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-linkedin ico-link"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-github ico-github"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="#0">
                <i className="fa fa-instagram ico-insta"></i>
              </a>
            </div>
          </div>
          {/* {teams.web} */}
        </div>
        {/* 
        <div id="cloud_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Cloud Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-12 col-sm-12 teams">
              <div>
                <span
                  className="Tooltip dsa_cp_tooltip"
                  data-tooltip="I am a blockchain and cloud enthusiast, I am passionate about my work and I am a people person who enjoys meeting new individuals."
                >
                  <img
                    src="https://i.ibb.co/x7xHcyz/Shriniwas-Khond.png"
                    className="img-fluid team-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Shriniwas Khond</h5>

              <h5>Cloud Lead</h5>
              <span></span>
              <div className="social-ico-team col-lg-12">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/shriniwas-khond-906329209/"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ShriniwasKhond"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/shriniwas_khond/"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href="https://www.kaggle.com/shriniwaskhond"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
                <a
                  href="https://gdsc.community.dev/u/m8vetm/#/about"
                  className="team-profile-link ml-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Gdsc_All}
                    alt="gdsc_logo"
                    className="team-gdsc-logo"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div> */}

        {/* <div id="dsa_cp_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">DSA/CP Team</h3>
          </Fade>
          <Fade up>
            <div className="col-lg-12 col-sm-12 teams">
              <div>
                <span
                  className="Tooltip dsa_cp_tooltip"
                  data-tooltip="I am pursuing computer engineering , I like to code , listen songs and Wandering the empty roads alone."
                >
                  <img
                    src="https://i.ibb.co/XbMkh0m/HARSHAL-RAUNDAL.png"
                    className="img-fluid team-img"
                    alt="Lead_Image"
                  />
                </span>
              </div>

              <h5 className="mt-4">Harshal Raundal</h5>

              <h5>DSA Lead</h5>
              <span></span>
              <div className="social-ico-team col-lg-12">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/harshal-raundal-8a25861a8"
                >
                  <i className="fa fa-linkedin ico-link"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/HarshalRaundal"
                >
                  <i className="fa fa-github ico-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/_.harshal__/"
                >
                  <i className="fa fa-instagram ico-insta"></i>
                </a>
                <a
                  href="https://github.com/HarshalRaundal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-link ico-link"></i>
                </a>
                <a
                  href="https://gdsc.community.dev/u/m22fkq/#/about"
                  className="team-profile-link ml-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Gdsc_All}
                    alt="gdsc_logo"
                    className="team-gdsc-logo"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div> */}
        {/* 
        <div id="ml_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">
              Machine Learning Team
            </h3>
          </Fade>
          {teams.ml}
        </div> */}

        {/* <div id="android_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Android Team</h3>
          </Fade>
          {teams.android}
        </div> */}
        {/* 
        <div id="management_team" className="row mt-lg-5">
          <Fade up>
            <h3 className="mt-5 mb-4 font-weight-bold">Management Team</h3>
          </Fade>
          {teams.management}
        </div> */}
      </div>
    </>
  );
};

export default Team;
