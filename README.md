# Quiz App

A lightweight, interactive web-based quiz application built with vanilla JavaScript, HTML, and CSS. This application provides a clean, modern interface for conducting multiple-choice quizzes with real-time feedback and scoring.

## Features

* **Responsive Design** : Optimized for desktop and mobile devices
* **Interactive UI** : Smooth hover effects and transitions
* **Real-time Scoring** : Tracks correct answers throughout the quiz
* **Clean Architecture** : Separation of concerns with dedicated HTML, CSS, and JavaScript files
* **Extensible Question Set** : Easy to modify and expand quiz content
* **Instant Results** : Displays final score with option to retake the quiz

## Technology Stack

* **HTML5** : Semantic markup structure
* **CSS3** : Modern styling with flexbox, transitions, and responsive design
* **Vanilla JavaScript** : ES6+ features for quiz logic and DOM manipulation

## Project Structure

<pre><div class="relative group/copy rounded-lg"><div class="sticky opacity-0 group-hover/copy:opacity-100 top-2 py-2 h-12 w-0 float-right"><div class="absolute right-0 h-8 px-2 items-center inline-flex"><button class="inline-flex
  items-center
  justify-center
  relative
  shrink-0
  can-focus
  select-none
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  disabled:drop-shadow-none text-text-300
          border-transparent
          transition
          font-styrene
          duration-300
          ease-[cubic-bezier(0.165,0.85,0.45,1)]
          hover:bg-bg-400
          aria-pressed:bg-bg-400
          aria-checked:bg-bg-400
          aria-expanded:bg-bg-300
          hover:text-text-100
          aria-pressed:text-text-100
          aria-checked:text-text-100
          aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 backdrop-blur-md" type="button" aria-label="Copy to clipboard" data-state="closed"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all opacity-100 scale-100"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="absolute top-0 left-0 transition-all opacity-0 scale-50"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg></div></button></div></div><div class=""><pre class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code><span><span>quiz-app/
</span></span><span>├── index.html      # Main HTML structure
</span><span>├── style.css       # Styling and responsive design
</span><span>├── script.js       # Quiz logic and functionality
</span><span>└── README.md       # Project documentation</span></code></pre></div></div></pre>

## How It Works

The application follows a simple workflow:

1. **Question Display** : Renders questions one at a time with four multiple-choice options
2. **Answer Selection** : Users select their answer via radio buttons with custom styling
3. **Validation** : Ensures an answer is selected before proceeding
4. **Scoring** : Compares selected answers against correct answers
5. **Results** : Shows final score and provides option to restart

## Installation & Setup

1. **Clone or download** the project files
2. **Ensure all files** (`index.html`, `style.css`, `script.js`) are in the same directory
3. **Open** `index.html` in any modern web browser
4. **Start taking** the quiz immediately

No build process, dependencies, or server setup required.

## Customization

### Adding New Questions

Modify the `quizData` array in `script.js`:

<pre><div class="relative group/copy rounded-lg"><div class="sticky opacity-0 group-hover/copy:opacity-100 top-2 py-2 h-12 w-0 float-right"><div class="absolute right-0 h-8 px-2 items-center inline-flex"><button class="inline-flex
  items-center
  justify-center
  relative
  shrink-0
  can-focus
  select-none
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  disabled:drop-shadow-none text-text-300
          border-transparent
          transition
          font-styrene
          duration-300
          ease-[cubic-bezier(0.165,0.85,0.45,1)]
          hover:bg-bg-400
          aria-pressed:bg-bg-400
          aria-checked:bg-bg-400
          aria-expanded:bg-bg-300
          hover:text-text-100
          aria-pressed:text-text-100
          aria-checked:text-text-100
          aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 backdrop-blur-md" type="button" aria-label="Copy to clipboard" data-state="closed"><div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all opacity-100 scale-100"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="absolute top-0 left-0 transition-all opacity-0 scale-50"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg></div></button></div></div><div class="text-text-500 text-xs p-3.5 pb-0">javascript</div><div class=""><pre class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code class="language-javascript"><span><span class="token">const</span><span> quizData </span><span class="token">=</span><span></span><span class="token">[</span><span>
</span></span><span><span></span><span class="token">{</span><span>
</span></span><span><span></span><span class="token literal-property">question</span><span class="token">:</span><span></span><span class="token">"Your question here?"</span><span class="token">,</span><span>
</span></span><span><span></span><span class="token literal-property">a</span><span class="token">:</span><span></span><span class="token">"Option A"</span><span class="token">,</span><span>
</span></span><span><span></span><span class="token literal-property">b</span><span class="token">:</span><span></span><span class="token">"Option B"</span><span class="token">,</span><span> 
</span></span><span><span></span><span class="token literal-property">c</span><span class="token">:</span><span></span><span class="token">"Option C"</span><span class="token">,</span><span>
</span></span><span><span></span><span class="token literal-property">d</span><span class="token">:</span><span></span><span class="token">"Option D"</span><span class="token">,</span><span>
</span></span><span><span></span><span class="token literal-property">correct</span><span class="token">:</span><span></span><span class="token">"a"</span><span class="token">,</span><span></span><span class="token">// Letter corresponding to correct answer</span><span>
</span></span><span><span></span><span class="token">}</span><span class="token">,</span><span>
</span></span><span><span></span><span class="token">// Add more questions...</span><span>
</span></span><span><span></span><span class="token">]</span><span class="token">;</span></span></code></pre></div></div></pre>

### Styling Modifications

* **Colors** : Update CSS custom properties in `style.css`
* **Layout** : Modify `.quiz-container` class for different sizing
* **Animations** : Adjust transition durations and effects

## Design Features

* **Modern UI** : Clean, card-based design with subtle shadows
* **Accessibility** : Proper labeling and keyboard navigation support
* **Visual Feedback** : Hover states and selected answer highlighting
* **Typography** : Professional font stack with optimal readability
