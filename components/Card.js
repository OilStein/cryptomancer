import Image from "next/image"

const Card = ({title, description, logo, url}) => {
  return (
    <div className="p-1 m-2">
      <div className="m-2">
        <Image src={logo} alt="Logo" layout="responsive" width={200} height={100}></Image>
      </div>
      <a href={url} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </div>
  )
}

export default Card