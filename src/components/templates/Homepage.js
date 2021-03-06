import { CheckOurPromoToday, OurPartner, PeopleFavorite, StaffStoreCustomer, StartYourDayWithCoffee, VisitOurStoreOnTheMapBelow, WeProvideGoodCoffee } from '../organisme'

export default function Homepage(){
   return(
      <div>
         <StartYourDayWithCoffee/>
         <StaffStoreCustomer/>
         <WeProvideGoodCoffee/>
         <PeopleFavorite/>
         <VisitOurStoreOnTheMapBelow/>
         <OurPartner/>
         <CheckOurPromoToday/>
      </div>
   )
}