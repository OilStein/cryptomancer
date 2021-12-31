import Card from "../components/Card"
import Layout from "../components/Layouts"
import data from "../tech.json"

// TODO add card css with description with why I used these
const About = () => {
  const tech = data.tech
  return (
    <Layout>
      <div className="flex">
        {tech.map(item => {
          return (
            <Card key={item.title} title={item.title} description={item.description} logo={item.logo} url={item.url}></Card>
          )
        })}
      </div>

    </Layout>
  )
}

export default About