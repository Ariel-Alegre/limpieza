import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const StyledCard = styled(Card)({
  maxWidth: '100%',
  marginTop: 20,

});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start', // Alinea a la izquierda
  alignItems: 'center',
});

const StyledButton = styled(Button)({
  margin: '5px',
});

const NumberCard = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (<div>

        <h3>Custom Services</h3>
    <StyledCard>

      <CardContent>
    <h4>Custom job</h4>
        <ButtonContainer>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleDecrement}
            sx={{
                backgroundColor: 'transparent',
                color: '#000',
                ":hover":{backgroundColor:'transparent'}
                
            }}
          >
            <RemoveIcon/>
          </StyledButton>
          <Typography variant="h5" component="div">
            {number}
          </Typography>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleIncrement}
          >
            <AddIcon/>
          </StyledButton>
        </ButtonContainer>
        <p>Pro will provide you a quote if the work you need does not fit into one of our standard categories. Please provide as much detail as possible, including pictures.</p>
      </CardContent>
    </StyledCard>
    <div>

<h3>Carpet Cleaning</h3>
<StyledCard>

<CardContent>
<h4>1 Room</h4>
<ButtonContainer>
  <StyledButton
    variant="contained"
    color="secondary"
    onClick={handleDecrement}
    sx={{
        backgroundColor: 'transparent',
        color: '#000',
        ":hover":{backgroundColor:'transparent'}
        
    }}
  >
    <RemoveIcon/>
  </StyledButton>
  <Typography variant="h5" component="div">
    {number}
  </Typography>
  <StyledButton
    variant="contained"
    color="primary"
    onClick={handleIncrement}
  >
    <AddIcon/>
  </StyledButton>
</ButtonContainer>
<p>Schedule with us and we will clean the dirt and grime out of your carpets. We have special equipment and preferred cleaning solution to get your floor looking clean again! </p>
</CardContent>

</StyledCard>


</div>
<div>
<StyledCard>

<CardContent>
<h4>1BD Home</h4>
<ButtonContainer>
  <StyledButton
    variant="contained"
    color="secondary"
    onClick={handleDecrement}
    sx={{
        backgroundColor: 'transparent',
        color: '#000',
        ":hover":{backgroundColor:'transparent'}
        
    }}
  >
    <RemoveIcon/>
  </StyledButton>
  <Typography variant="h5" component="div">
    {number}
  </Typography>
  <StyledButton
    variant="contained"
    color="primary"
    onClick={handleIncrement}
  >
    <AddIcon/>
  </StyledButton>
</ButtonContainer>
<p>Pre-treat up to 3 areas for breaking up heavy soil and oil residue, and then use a truck-mounted steam cleaner.</p>
</CardContent>

</StyledCard>
</div>
<div>
<StyledCard>

<CardContent>
<h4>Any 3 areas (2 story)</h4>
<ButtonContainer>
  <StyledButton
    variant="contained"
    color="secondary"
    onClick={handleDecrement}
    sx={{
        backgroundColor: 'transparent',
        color: '#000',
        ":hover":{backgroundColor:'transparent'}
        
    }}
  >
    <RemoveIcon/>
  </StyledButton>
  <Typography variant="h5" component="div">
    {number}
  </Typography>
  <StyledButton
    variant="contained"
    color="primary"
    onClick={handleIncrement}
  >
    <AddIcon/>
  </StyledButton>
</ButtonContainer>
<p>Schedule with us and we will clean the dirt and grime out of your carpets. We have special equipment and preferred cleaning solution to get your floor looking clean again!</p>
</CardContent>

</StyledCard>
</div>
<div>
<StyledCard>

<CardContent>
<h4>Any 5 areas (2 story)</h4>
<ButtonContainer>
  <StyledButton
    variant="contained"
    color="secondary"
    onClick={handleDecrement}
    sx={{
        backgroundColor: 'transparent',
        color: '#000',
        ":hover":{backgroundColor:'transparent'}
        
    }}
  >
    <RemoveIcon/>
  </StyledButton>
  <Typography variant="h5" component="div">
    {number}
  </Typography>
  <StyledButton
    variant="contained"
    color="primary"
    onClick={handleIncrement}
  >
    <AddIcon/>
  </StyledButton>
</ButtonContainer>
<p>Schedule with us and we will clean the dirt and grime out of your carpets. We have special equipment and preferred cleaning solution to get your floor looking clean again!</p>
</CardContent>

</StyledCard>
</div>
<div>
<StyledCard>

<CardContent>
<h4>Any 7 areas (2 story)</h4>
<ButtonContainer>
  <StyledButton
    variant="contained"
    color="secondary"
    onClick={handleDecrement}
    sx={{
        backgroundColor: 'transparent',
        color: '#000',
        ":hover":{backgroundColor:'transparent'}
        
    }}
  >
    <RemoveIcon/>
  </StyledButton>
  <Typography variant="h5" component="div">
    {number}
  </Typography>
  <StyledButton
    variant="contained"
    color="primary"
    onClick={handleIncrement}
  >
    <AddIcon/>
  </StyledButton>
</ButtonContainer>
<p>Schedule with us and we will clean the dirt and grime out of your carpets. We have special equipment and preferred cleaning solution to get your floor looking clean again!</p>
</CardContent>

</StyledCard>
</div>

<div>
<h3>Additional Cleaning</h3>
    <StyledCard>

      <CardContent>
    <h4>Loveseat or chair</h4>
        <ButtonContainer>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleDecrement}
            sx={{
                backgroundColor: 'transparent',
                color: '#000',
                ":hover":{backgroundColor:'transparent'}
                
            }}
          >
            <RemoveIcon/>
          </StyledButton>
          <Typography variant="h5" component="div">
            {number}
          </Typography>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleIncrement}
          >
            <AddIcon/>
          </StyledButton>
        </ButtonContainer>
        <p>Have you cleaned your loveseat or man chair since you bought it? Over time human oils and debris(coins,food,hair) become embedded in the upholstery. Wr help clean off the dirt and grime to make your man chair smell and feel new again.</p>
      </CardContent>
    </StyledCard>
</div>
<div>
<StyledCard>

<CardContent>
<h4>Sofa</h4>
  <ButtonContainer>
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={handleDecrement}
      sx={{
          backgroundColor: 'transparent',
          color: '#000',
          ":hover":{backgroundColor:'transparent'}
          
      }}
    >
      <RemoveIcon/>
    </StyledButton>
    <Typography variant="h5" component="div">
      {number}
    </Typography>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleIncrement}
    >
      <AddIcon/>
    </StyledButton>
  </ButtonContainer>
  <p>Have you cleaned your sofa since you bought it? Over time human oils and debris(coins,food,hair) become embedded in the upholstery. We help clean off the dirt and grime to make your sofa smell and feel new again.</p>
</CardContent>
</StyledCard>
</div>
<div>
<StyledCard>

<CardContent>
<h4>Sectional Sofa</h4>
  <ButtonContainer>
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={handleDecrement}
      sx={{
          backgroundColor: 'transparent',
          color: '#000',
          ":hover":{backgroundColor:'transparent'}
          
      }}
    >
      <RemoveIcon/>
    </StyledButton>
    <Typography variant="h5" component="div">
      {number}
    </Typography>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleIncrement}
    >
      <AddIcon/>
    </StyledButton>
  </ButtonContainer>
  <p>Have you cleaned your sectional since you bought it? Over time human oils and debris(coins,food,hair) become embedded in the upholstery. We help clean off the dirt and grime to make your sofa smell and feel new again.</p>
</CardContent>
</StyledCard>
</div>


<div>
<StyledCard>

<CardContent>
<h4>Rug</h4>
  <ButtonContainer>
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={handleDecrement}
      sx={{
          backgroundColor: 'transparent',
          color: '#000',
          ":hover":{backgroundColor:'transparent'}
          
      }}
    >
      <RemoveIcon/>
    </StyledButton>
    <Typography variant="h5" component="div">
      {number}
    </Typography>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleIncrement}
    >
      <AddIcon/>
    </StyledButton>
  </ButtonContainer>
  <p>Get a rug cleaned for one low price. We have special equipment and preferred cleaning solution to get your carpet looking new again.</p>
</CardContent>
</StyledCard>
</div>

<div>
<StyledCard>

<CardContent>
<h4>Tile</h4>
  <ButtonContainer>
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={handleDecrement}
      sx={{
          backgroundColor: 'transparent',
          color: '#000',
          ":hover":{backgroundColor:'transparent'}
          
      }}
    >
      <RemoveIcon/>
    </StyledButton>
    <Typography variant="h5" component="div">
      {number}
    </Typography>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleIncrement}
    >
      <AddIcon/>
    </StyledButton>
  </ButtonContainer>
  <p>Cleaning technicians use special equipment, tools and techniques to clean a variety of tile.</p>
</CardContent>
</StyledCard>
</div>
<div>
<StyledCard sx={{
  marginBottom: 30
}}>

<CardContent>
<h3>Custom request?</h3>

  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            id="standard-adornment-amount"
          />
        </FormControl>
</CardContent>
</StyledCard>
</div>
  </div>

  );
};

export default NumberCard;
