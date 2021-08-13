import React  from "react";
import App from "../../App";
import NavBar from "../../Navigation/Navigationbar";
import Watchlist from "../../Watchlist";
import  shallow from "enzyme";
import Graph from "../../Portfolio/Graph";
import GeneralStats from "../../Portfolio/Holdings/GeneralStats";
import Holdings from "../../Portfolio/Holdings/Holdings";



describe("Rendering the landing page components", () => {

    it("App component renders ", () => {
        shallow(<App />)
    });


    it("Navbar elements have rendered.  ", ()=>{
        const navbar = shallow(<NavBar />)
        expect(navbar.contains('Cryptoprice Tracker'));
        expect(navbar.contains('Cryptocurrencies'));
        expect(navbar.contains('Login'));
        expect(navbar.contains('Profile'));
    });

    it("Watch list renders", () =>{
        const watchlist = shallow(<Watchlist />)
        expect(watchlist.contains('Watchlist'))
        expect(watchlist.contains('BTC'))
        expect(watchlist.contains('ETH'))
        expect(watchlist.contains('DOGE'))
        expect(watchlist.contains('CARDANO'))

    });

    it('Top 5 holdings', () =>{
        const holdings = shallow(<Holdings />)
        expect(holdings.contains('bitcoin'))
        expect(holdings.contains('ethereum'))
        expect(holdings.contains('dogecoin'))
        expect(holdings.contains('cardano'))
    })

    it('Performance graph renders ' , ()=>{
        const graph = shallow(<Graph />);
        expect(graph.contains('Performance (YTD)'))
    })

    it('Side Statistics render', () =>{
        const generalStats = shallow(<GeneralStats />)
        expect(generalStats.contains('Performance to date'))
        expect(generalStats.contains('Account Value'))
        expect(generalStats.contains('Top Holding'))
        expect(generalStats.contains('Cash held'))

    })
});