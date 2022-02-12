import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import  "./home.css"
import Chart from "../../components/chart/Chart"
// import { userData } from "../../dummyData"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart/>
    </div>
  )
}
