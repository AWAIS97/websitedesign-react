import React from 'react'
import {FooterContainer,FooterSubcription,FooterSubHeading,FooterSubText,Form,FormInput,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrapper,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink,SocialIcon} from './Footer.elements'
import {Button} from '../../globalStyle'
import { FaFacebook, FaLinkedin,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <FooterContainer>
            <FooterSubcription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest information.
                </FooterSubHeading>
                <FooterSubText>
                    You can join unsubcribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="You email"/>
                        <Button fontBig>Subcribe</Button>
                </Form>
            </FooterSubcription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Inverstors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Inverstors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Inverstors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Inverstors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        
                        ULTRA
                        </SocialLogo>
                        <WebsiteRights>
                            ULTRA  2020
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    

                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
