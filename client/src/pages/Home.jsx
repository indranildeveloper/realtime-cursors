import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdsClickIcon from "@mui/icons-material/AdsClick";

import { socket } from "../socket/socket";

const Home = ({ username }) => {
  const cursorRef = useRef(null);
  const [otherUser, setOtherUser] = useState("");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      socket.emit("move-cursor", { x: clientX, y: clientY, username });
    };

    window.addEventListener("mousemove", handleMouseMove);

    socket.on("move-cursor", (data) => {
      console.log(data);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${data.x}px`;
        cursorRef.current.style.top = `${data.y}px`;
        setOtherUser(data.username);
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      socket.off("move-cursor");
    };
  }, [otherUser, username]);

  return (
    <div>
      <Box ref={cursorRef} sx={{ position: "absolute" }}>
        {otherUser !== "" && (
          <>
            <AdsClickIcon color="primary" />
            <Typography>{otherUser}</Typography>
          </>
        )}
      </Box>
    </div>
  );
};

export default Home;
