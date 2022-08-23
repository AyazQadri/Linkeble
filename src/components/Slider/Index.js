import React, { useState, useEffect, useReducer } from "react";
import {
  SliderItem,
  SliderContainer,
  SliderWrapper,
  Navigation,
  NavigationItem,
  ControlLeft,
  ControlRight,
} from "./styles";
import { Box, Typography, Container, CardMedia } from "@material-ui/core";
import SliderImage from "../../images/sliderimage.png";
import '../UltimateServices/UltimateServices.css'

const Slider = () => {
  const width = useWindowWidth();
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
    ],
  });

  return (
    <div className="mainSlider">
      <SliderContainer
        className={"slider-instance"}
        height={"250px"}
        style={{ borderRadius: "10px" }}
      >
        <SliderWrapper
          width={width * state.items.length}
          style={{
            transform: `translateX(${-(state.currentIndex * width)}px)`,
            transition: "transform ease-out 0.30s",
            width: width * state.items.length + "px",
          }}
        >
          {state.items.map((i, index) => {
            return (
              <Slide
                key={i.id}
                last={index === state.items.length - 1}
                index={index}
                item={i}
                dispatch={dispatch}
                snap={state.snap}
                width={width}
              />
            );
          })}
        </SliderWrapper>

        <Navigation>
          {state.items.map((i, index) => {
            return (
              <NavigationItem
                active={index === state.currentIndex}
                onClick={() => dispatch({ type: "GOTO", index })}
                key={"nav" + i.id}
              >
                &nbsp;
              </NavigationItem>
            );
          })}
        </Navigation>
        {/* <div>
          {state.currentIndex > 0 && (
            <ControlLeft onClick={() => dispatch({ type: "PREV" })}>
              prev
            </ControlLeft>
          )}

          {state.currentIndex < state.items.length - 1 && (
            <ControlRight onClick={() => dispatch({ type: "NEXT" })}>
              next
            </ControlRight>
          )}
        </div> */}
      </SliderContainer>
    </div>
  );
};

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + (1 % state.items.length),
      };
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - (1 % state.items.length),
      };
    case "GOTO":
      return {
        ...state,
        currentIndex: action.index,
      };
    case "RESET":
      return { currentIndex: 0, currentPosition: 0 };

    default:
      return state;
  }
}

const Slide = ({ item, width }) => {
  return (
    <div style={{  overflowY: 'auto'   }}>
    <SliderItem width={width}>
      <Box
        style={{ display: "flex", flexDirection: "column", padding: "4rem",}}
      >
        <Box>
          <Typography
            style={{
              color: "white",
              fontSize: "2.5vw",
              textOverflow: "ellipsis",
              paddingBottom: "13px",
            }}
          >
            Develop App for your Business
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: "1.1vw",
              lineHeight: "1.5rem",
              width: '55%',
            }}
            >
            Hire top talented Mobile App developer on Linkeble and develop Your
            own Custom App for your business and grow rapidly
          </Typography>
        </Box>
      </Box>
      <Box style={{ paddingRight: "10rem", marginTop: "1.5rem" }}>
        <img src={SliderImage} className='cardMedia' width="600" height="400" />
        {/* <CardMedia
          component="img"
          height="200"
          image={SliderImage}
          alt="image"
        /> */}
      </Box>
    </SliderItem>
    </div>
  );
};

export default Slider;
