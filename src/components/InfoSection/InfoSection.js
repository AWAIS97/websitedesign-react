import React from 'react'
import {InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,ImgWarpper,Img} from './InfoSection.elements'
import {Container,Button} from '../../globalStyle'
import {Link} from 'react-router-dom'

function InfoSection({lightBg,imgStart,lightTopLine,lightTextDesc,buttonLable,description,headLine,lightText,topLine,primary,img,alt,start}) {
    return (
       <>
       <InfoSec lightBg={lightBg}>
           <Container>
               <InfoRow imgStart={imgStart}>
                   <InfoColumn>
                       <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to="/sign-up">
                         <Button big fontBig primary={primary}>
                         {buttonLable}        
                         </Button>
                        </Link>               
                       </TextWrapper>
                   </InfoColumn>
                   <InfoColumn>
                       <ImgWarpper start={start}>
                           <Img src={img} alt={alt}/>
                       </ImgWarpper>
                   </InfoColumn>
               </InfoRow>
           </Container>
       </InfoSec>
       </>
    )
}

export default InfoSection
