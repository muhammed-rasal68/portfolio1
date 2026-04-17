
The user wants a JSON dump of all project details from their portfolio. This is a read-only data extraction task — no code changes needed. I already have the project data from the visible `ProjectsSection.tsx` file.

## Plan

Output the 5 projects from `src/components/sections/ProjectsSection.tsx` as a JSON array, including: title, description, image asset path, tags, liveUrl, and featured flag.

```json
[
  {
    "title": "Perfect Chess",
    "description": "An interactive chess platform with AI opponent, move validation, and real-time gameplay features for chess enthusiasts.",
    "image": "src/assets/project-chess.png",
    "tags": ["React", "TypeScript", "Chess.js", "AI"],
    "liveUrl": "https://perfect-chess.vercel.app/",
    "featured": true
  },
  {
    "title": "Cafeteria Arafa",
    "description": "A modern cafeteria website featuring menu showcase, online ordering, and customer reviews with a warm, inviting design.",
    "image": "src/assets/project-cafeteria.png",
    "tags": ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    "liveUrl": "https://v0-new-project-qdbcsydpim5.vercel.app/",
    "featured": true
  },
  {
    "title": "Imposter Game",
    "description": "A fun multiplayer word game designed to be played with friends and family, featuring real-time gameplay and social interaction.",
    "image": "src/assets/project-imposter.png",
    "tags": ["React", "Multiplayer", "Game", "Real-time"],
    "liveUrl": "https://imposter-rasal-final.base44.app/Landing",
    "featured": true
  },
  {
    "title": "Soundwave",
    "description": "A Spotify-inspired music streaming interface with playlists, track browsing, and a sleek dark-themed design.",
    "image": "src/assets/project-soundwave.png",
    "tags": ["React", "Music", "Streaming", "UI/UX"],
    "liveUrl": "https://soundwave-spotify.base44.app",
    "featured": true
  },
  {
    "title": "Result PPS",
    "description": "A comprehensive result management and analysis platform with intuitive interface for tracking and displaying academic results.",
    "image": "src/assets/project-results.png",
    "tags": ["React", "Data Analytics", "Dashboard", "API"],
    "liveUrl": "https://result-pps.base44.app/",
    "featured": true
  }
]
```

No code changes are required — this is purely a data export from the existing `projects` array.

<lov-actions>
<lov-suggestion message="Export the projects array to a standalone JSON file at src/data/projects.json and refactor ProjectsSection.tsx to import from it.">Move projects to JSON file</lov-suggestion>
<lov-suggestion message="Add a new field to each project (e.g., githubUrl or completionDate) and display it on the project cards.">Add more project metadata</lov-suggestion>
</lov-actions>
