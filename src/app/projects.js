

export default function Projects() {

  return (
  <div>
    <div className="flex flex-row mt-16 font-sans" id="project">
      <div className="rounded-xl ">
        {/* Add the projects picks and create a gif for when mouse on: on sm:change img size to smaller */}
        <img 
          className="rounded-xl h-auto max-w-xl md:ml-20 sm:ml-2 shadow-lg"
          src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project" />
      </div>
      <div className="text-black text-balance lg:ml-20 md:ml-10 min-w-[26rem]">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-4 mb-4 font-sans">
          Supervise Hub
        </h3>
        <h3 className="text-xl text-balance tracking-tight text-gray-900 sm:text-2xl mt-4 mb-4 font-sans">
        This web application assists users in managing and tracking their one on one meetings with their staff 
        </h3>
        <h4 >
        I encrypted and stored user information using JSON Web Tokens and localStorage. Agile development and cross-functional teams improved the user experience. Thorough testing ensured a stable product with fixed bugs
        </h4>
        <div className="mt-10">
          <a 
            className="font-bold  text-white mt-20 mr-7 p-1.5  rounded-md bg-gradient-to-r from-blue-700/80 to-indigo-800/80 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300"
            href="https://github.com/jsoto007/supervise-hub-v2"
            target="_blank"
          >GitHub Repo</a>
          <a 
            className="font-bold  text-white mt-20 mr-7 p-1.5  rounded-md bg-gradient-to-r from-blue-700/80 to-indigo-800/80 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300"
            href="https://www.youtube.com/watch?v=vC5m72mCiyE"
            target="_blank"
          >Video Demo</a>
        </div>
        
      </div>
      
    </div>

    <div className="flex flex-row mt-16 font-sans">
     
      <div className="text-black md:ml-28">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-4 mb-4 font-sans">
        Expense Tracker
        </h3>
        <h3 className="text-xl text-balance tracking-tight text-gray-900 sm:text-2xl mt-4  mb-4 font-sans">
        Simplified expense management and financial tracking through the Expense Organizer web app
        </h3>
        <h4 >
        I used React.js, HTML5, and CSS3 to make a responsive interface that enhances user experience. I also optimized the interface with modern JavaScript and managed data with Ruby on Rails and PostgreSQL. Agile methodologies and Git were used for collaboration and code quality.
        </h4>

        <div className="mt-10">
          <a 
            className="font-bold  text-white mt-20 mr-7 p-1.5  rounded-md bg-gradient-to-r from-blue-700/80 to-indigo-800/80 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300"
            href="https://github.com/jsoto007/expense-organizer"
            target="_blank"
          >GitHub Repo</a>
          <a 
            className="font-bold  text-white mt-20 mr-7 p-1.5  rounded-md bg-gradient-to-r from-blue-700/80 to-indigo-800/80 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300"
            href="https://www.youtube.com/watch?v=vC5m72mCiyE"
            target="_blank"
          >Video Demo</a>
        </div>
      </div>
      <div className="rounded-xl ">
        <img 
          className="rounded-xl h-auto max-w-xl ml-60 shadow-lg"
          src="https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project" />
      </div>
    </div>
    <div className="flex flex-row mt-16 font-sans">
      <div className="rounded-xl ">
        <img 
          className="rounded-xl h-auto max-w-xl ml-20 shadow-lg"
          src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project" />
      </div>
      <div className="text-black md:ml-20">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-4 mb-4 font-sans">
        Todos API / React frontend
        </h3>
        <h3 className="text-xl tracking-tight text-gray-900 sm:text-2xl mt-4 mb-4 font-sans">
        Created a JSON API for data retrieval and manipulation with categorization and task management features
        </h3>
        <ul>
          <li>
          I encrypted and stored user information using JSON Web Tokens and localStorage. <br />
          Agile development and cross-functional teams improved the user experience. <br />
          Thorough testing ensured a stable product with fixed bugs.
          </li>
        </ul>
        <div className="mt-10">
          <a 
            className="font-bold  text-white mr-7 p-1.5  rounded-md bg-gradient-to-r from-blue-700/80 to-indigo-800/80 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300"
            href="https://github.com/jsoto007/todosAPI"
            target="_blank"
          >GitHub Repo</a>
          <a 
            className="font-bold  text-white mt-20 mr-7 p-1.5  rounded-md bg-gradient-to-r from-blue-700/80 to-indigo-800/80 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300"
            href="https://www.youtube.com/watch?v=TH0Amh9fHt4"
            target="_blank"
          >Video Demo</a>
        </div>
      </div>
    </div>
    
</div>
  )
}