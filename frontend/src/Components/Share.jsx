import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import fb from "../img/social/fb.jpg";
import whatsapp from "../img/social/whatsapp.jpg";
import linkedin from "../img/social/linkedin.jpg";
import twitter from "../img/social/twitter.jpg";
import mail from "../img/social/mail.jpg";
import "../Css/share.css";
import { useState } from "react";
function Share() {
  const [copyText, setCopyText] = useState("Copy");

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("Link Copied!");
        setCopyText("Copied!");
      })
      .catch((error) => {
        console.log("Error copying link to clipboard:", error);
      });
  };

  return (
    <>
      <div className="share-section">
        <div className="share-head">
          <p>Share</p>
          <CloseRoundedIcon
            fontSize="medium"
            style={{ color: "white" }}
            className="cancel-share"
          />
        </div>
        <div className="share-social">
          <img
            src={fb}
            alt="fb"
            className="social-handles"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
              )
            }
          />
          <img
            src={whatsapp}
            alt="whatsapp"
            className="social-handles"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(
                `https://api.whatsapp.com/send?text=Check%20out%20this%20video:%20${window.location.href}`
              )
            }
          />
          <img
            src={twitter}
            alt="twitter"
            className="social-handles"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${window.location.href}`
              )
            }
          />
          <img
            src={mail}
            alt="mail"
            target="_blank"
            className="social-handles"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(
                `mailto:?subject=Check%20out%20this%20video&body=I%20thought%20you%20might%20find%20this%20video%20interesting:%20${window.location.href}`
              )
            }
          />
          <img
            src={linkedin}
            alt="linkedin"
            target="_blank"
            className="social-handles"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(
                `https://www.linkedin.com/shareArticle?url=${window.location.href}`
              )
            }
          />
        </div>
        <div className="share-link">
          <div className="link-area">
            <p>{window.location.href}</p>
            <button className="copy-link-btn" onClick={handleCopyLink}>
              {copyText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;