import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";

//components

import Search from "./Search";
import CustomButtons from "./Buttons";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background: #2874f0;
  height: 58px;
`;
const StyledBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
  color:white
`;
const CustomButtonWrapper=styled(Box)`
  margin:0 5% 0 auto;
`

const StyledTypography = styled(Typography)`
  font-size: 12px;
  font-style: italic;
`;

const StyledImg=styled('img')({
    width:10,
    height:10,
    marginTop:3,
})

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledAppBar>
      <Toolbar style={{minHeight:55}}>
        <Link to="/" style={{textDecoration:"none",marginLeft:"12%"}} >
          <StyledBox >
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{display:"flex"}}>
              <StyledTypography>Explore&nbsp;
                <Box component="span" style={{ color: "yellow" }}>Plus&nbsp;</Box>
              </StyledTypography>
              <StyledImg src={subURL} alt="Sub-logo"></StyledImg>
            </Box>
          </StyledBox>
        </Link>
        <Search/>
        <CustomButtonWrapper>
          <CustomButtons></CustomButtons>
        </CustomButtonWrapper> 
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
