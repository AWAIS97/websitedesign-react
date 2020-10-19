import React from 'react'
import {Button} from '../../globalStyle'
import {GiCutDiamond,GiRock,GiFloatingCrystal} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'

import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLenght,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements'

function Pricing() {
    return (
       <IconContext.Provider value={{color: '#a9b3c1',size: '64'}}>
       <PricingSection>
           <PricingWrapper>
               <PricingHeading>Our Services</PricingHeading>
               <PricingContainer>
                   <PricingCard to='/'>
                       <PricingCardInfo>
                       <PricingCardIcon>
                           <GiRock/>
                       </PricingCardIcon>
                       <PricingCardPlan>Start Pack</PricingCardPlan>
                   <PricingCardCost>$99.9</PricingCardCost>
                   <PricingCardLenght>Per Month</PricingCardLenght>
                   <PricingCardFeatures>
                       <PricingCardFeature>
                           100 New Users
                       </PricingCardFeature>
                       <PricingCardFeature>
                           $10,000 Budget
                       </PricingCardFeature>
                       <PricingCardFeature>
                           Retargeting analytics
                       </PricingCardFeature>
                   </PricingCardFeatures>
                   <Button primary>Choose Plan</Button>
                   </PricingCardInfo>
                   </PricingCard>
                   <PricingCard to='/'>
                       <PricingCardInfo>
                       <PricingCardIcon>
                           <GiFloatingCrystal/>
                       </PricingCardIcon>
                       <PricingCardPlan>Gold Pack</PricingCardPlan>
                   <PricingCardCost>$399.9</PricingCardCost>
                   <PricingCardLenght>Per Month</PricingCardLenght>
                   <PricingCardFeatures>
                       <PricingCardFeature>
                           1000 New Users
                       </PricingCardFeature>
                       <PricingCardFeature>
                           $50,000 Budget
                       </PricingCardFeature>
                       <PricingCardFeature>
                           Lead Gen analytics
                       </PricingCardFeature>
                   </PricingCardFeatures>
                   <Button primary>Choose Plan</Button>
                   </PricingCardInfo>
                   </PricingCard>
                   <PricingCard to='/'>
                       <PricingCardInfo>
                       <PricingCardIcon>
                           <GiCutDiamond/>
                       </PricingCardIcon>
                       <PricingCardPlan>Diamond Pack</PricingCardPlan>
                   <PricingCardCost>$999.9</PricingCardCost>
                   <PricingCardLenght>Per Month</PricingCardLenght>
                   <PricingCardFeatures>
                       <PricingCardFeature>
                           Unlimited Users
                       </PricingCardFeature>
                       <PricingCardFeature>
                           Unlimited Budget
                       </PricingCardFeature>
                       <PricingCardFeature>
                          24/7 Support
                       </PricingCardFeature>
                   </PricingCardFeatures>
                   <Button primary>Choose Plan</Button>
                   </PricingCardInfo>
                   </PricingCard>
               </PricingContainer>
           </PricingWrapper>
       </PricingSection>

       </IconContext.Provider>
    )
}

export default Pricing
