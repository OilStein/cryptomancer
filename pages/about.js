import Layout from "../components/Layouts"


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
        </ul>
      </div>

    </Layout>
  )
}

export default About