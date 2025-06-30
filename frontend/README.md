## Node environment
Node version: 20.19.2
```bash
$ nvm use
```
Make sure to set your project's node version as required.

## Installation

Install the dependencies:

```bash
$ npm install
```

## Starting server

```bash
nvm use
npm install
npm run dev
```

### Node.js version

We use node 20+ (20.19.2), set up your local or gloabl node version to 20+ using nvm: 
`https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating`.

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Project Structure

The routing strategy used in this project is react-router Framework mode:
`https://reactrouter.com/start/framework/routing`

frontend
```
├── app/
├── features/
|   ├── components/    # All page related components
|   ├── services/         # All app page
|   ├── theme/         # All const types go here
|   ├── types/         # Global state management
│   └── utils/         # helper functions can be saved here
├── pages/  
├── redux/             # Global state management
|   ├── actions/       # Action creators categorized by feature
|       ├── auth/      
|       ├── other feature action folders/
|   ├── middleware/     
|   ├── reducers/       # All feature reducers go here
|       ├── authReducer/
|   ├── hooks.ts         # 
│   └── store.ts         # 
├── root.tsx           # The entry point of the whole app.
├── rootes.ts          # The route map for all pages, including layout and pages.
```

backend
```
├── app/
├── features/
|   ├── auth/ 
|       ├── controllers/
|       ├── routes/
|       ├── service/
|       ├── middleware/
|   ├── other service foler/     
├── global_middleware/  
├── global_types/
├── index.ts
├── server.ts
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
