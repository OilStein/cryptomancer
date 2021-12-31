import Layout from "../components/Layouts"

// TODO add card css with description with why I used these
const About = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-xl mb-4">
          Used technologies:
        </h1>
        <ul>
          <li>
            <a href='https://nextjs.org/'>Next.js</a>
          </li>
          <li>
            <a href="https://tailwindcss.com">tailwindcss</a>
          </li>
          <li>
            <a href="https://www.chartjs.org/docs/latest/">Chart.js</a>
          </li>
        </ul>
      </div>

    </Layout>
  )
}

export default About