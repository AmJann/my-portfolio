import React from "react";
import resume from "../images/Amber-J-March2024.pdf";
import resumeIcon from "../images/resume-icon.png";

function Contact() {
  return (
    <div>
      <div id="contactLogoContainer">
        <div className="contactImgContainer">
          <a
            href="https://www.linkedin.com/in/amber-jankowski/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="linked in logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAaVBMVEUAd7f///8AbLIAc7W90+ZsoswAcbT4+/1uocwAZ7DZ5/G/1+kAdbZ3ps4AbrMAarHI2+vT4u+dvdtemccrhb5LkMOQttfo8feqyeHv9vrh7fUAY65Wk8Uge7kogbzP3ex9rtIAXaxCiL+9Wn2aAAADtklEQVRoge2b2ZaiMBCGE5ZCMIRNNlvQ4f0fcrCVVqAgSB8qM+fwX/SFpPlIKGqDMP5QFCenitGoOiVx9OSy779hCiCI6HcJgDR88TNpEsIfMmXW8f2AnH5X4D/4mR58ewHZnR9KTXjGZNjyU/p738lMOYtAG54xiFislR+zhPK5H0ok7KQRz1o6ldPFNU/XeGuEabiGANfV4JpbSXYozk4rL75I8idEQJbzTo6XEHtIOHm8p8KktATjwIfyKroLgGSE5zwnWwFROwifh1T5kQwxfJuk0DwFkOJ4ntOYAFwn+PxGsQCiQe/+XRGFFwB7Cs/LmuAGyHiSzxOCSBBMWP9dPgHfmOFTGGBwnObbFPMv9N5/8CfxJPY/9/wb2+PbBZg0QBL/h0ffu3KiRNmIcD7N9FsLqFALiMiKdDQE5IIuAZP+aAW8E2UVINO8jz9WtEWIcOPybfIJfYMGTNvy8rLMr0WqpQITIEVd1xXoqf++L4FprYD/XwlhmiYAmGuLJgF9Dc4zONqrjIQpW8O5JInd6tJUYHzut6G2/Z6S9+cfqsFRv3ldgWRNFp5/3IeTe8Whgs9M+NEY7rvfV5MSknF8KB6pgTBEfB777tJKgw+uQGAR2OlckGBYePpOjQEmk7coDRabgkTP0iV/5rg50MpqF0AeSuzQU4W5dAkCC/v/A8zyAwHju9bT4haGgfJtBX8ucX4oXxjEVvH/zNRtnbxl7mAVH/11qOsiV7CGH86Z3kvZkhR+DX+hnCUlzIZ8bi3oYWzJ5wvyyE35CxZgU35Z6+X/nEcX/6rMpbflq8vYX/HLcxR658keAl/QRfkFP/LrwA1c2dyQNOSpTGUAq/mOHTwjjIBgMhofVQawll/W7zMLphqpubsN37n0F9aYWAFHFYVX8uNBbBPgoeOcZhP+eVSqTbWyVS+c1/FvI8cuzBwdqXqRsopfIm4FT6SVD+Aq/hE56UQvdRM+1p0TNTo0VoTgVXw0uf9ChxZb8L+wM32hcUCVgqzhe6hTc9EosAU/RJ26i3qgLfjWB/yjbr6iCNn5O3/n7/ydv/N3/s7f+Tt/5+/8nb/z/1U+3tRdx8c/QW26988X7Cje08E/JlX1f0SDvEx8NTgMZFJOivY08bVS7neCS+QMZL36W6IOh0fz7uX4UNIvR2N99Rsw4Q4u0TDe5ieCAW30w9tUhp8dzIztDetr/uhsP1k5Vvf+H937n3Tv/9K9/033/j/d+x+17//Uvf9V+/5f7fufte//5vr2v/8F/LxIQjWMcIMAAAAASUVORK5CYII="
            />
          </a>
        </div>
        <div className="contactImgContainer">
          <a href="https://github.com/AmJann" target="_blank" rel="noreferrer">
            <img
              id="github"
              className="icon"
              alt="git hub logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLNmJkx-TnTTYZISbV7dZCMAxCPO_7fZEiA&usqp=CAU"
            />
          </a>
        </div>
        <div className="contactImgContainer">
          <a href={resume} target="_blank" rel="noreferrer">
            <img
              id="resume"
              className="icon"
              alt="resume icon"
              src={resumeIcon}
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text" id="email">
          Email: amberbjankowski@gmail.com
        </h3>
      </div>
    </div>
  );
}

export default Contact;
