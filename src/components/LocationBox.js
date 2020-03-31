import React from "react"
import styled from "styled-components"
import Background from "../components/Background"
import AniLink from "gatsby-plugin-transition-link"

const LocationBox = ({
  name,
  address,
  phone,
  hours1,
  hours2,
  hours3,
  link,
}) => {
  return (
    <Background>
      <LocationWrapper>
        <div>
          <h4>{name}</h4>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{hours1}</p>
          <p>{hours2}</p>
          <p>{hours3}</p>
          <AniLink fade to={link}>
            <button className="menuButton">View Menu</button>
          </AniLink>
        </div>
      </LocationWrapper>
    </Background>
  )
}

const LocationWrapper = styled.div`
  flex-wrap: wrap;
  text-align: center;
  color: var(--darkGray);
  h4 {
    color: var(--mainColor);
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
  p {
    font-size: 1rem;
  }
  .menuButton {
    padding: 0.75rem 1rem;
    margin-top: 1rem;
    border: 1px solid white;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: var(--mainColor);
    color: white;
    transition: ease-in 200ms;
    &:hover {
      background: none;
      border: 1px solid var(--mainColor);
      color: var(--mainColor);
      cursor: pointer;
    }
  }
`

export default LocationBox
