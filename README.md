**Mini Messageboard**

A simple messageboard where users can post messages, see previously posted messages, and view message details. This app demonstrates basic routing, form handling, and data storage in an array.

![image](https://github.com/user-attachments/assets/2a21e25b-aa23-4f94-a9b6-79b26a421b21)

**Features**
  - Users can view a list of all posted messages.
  - Users can add new messages by filling out a form.
  - Each message shows the user's name, message content, and the date it was added.
  - Users can view individual message details by clicking an "Open" button next to each message.

**Technologies Used**
  - **Backend:** Node.js, Express.js
  - **View Engine:** EJS
  - **Deployment:** Railway

**Live Demo**

You can access the app live here: [Mini Messageboard on Railway](https://mini-message-board-production-ecd3.up.railway.app/)

**Local Installation:**
1. **Clone the repository:**
```
git clone https://github.com/PopescuStefan1/mini-message-board.git
cd mini-messageboard
```

2. **Install dependencies:**
```
npm install
```

3. **Start the application:**
```
npm start
```
4. **Open your browser and navigate to ```http://localhost:3000```.**

**Key Functionalities**
  - **Viewing Messages**
    - When users visit the homepage, they see a list of all messages, displaying the username, message text, and the date the message was added.
  - **Creating a New Message**
    - Users can navigate to the "/new" route to fill out a form to add a new message.
    - The form collects the user's name and the message content, then sends the data via a POST request to add it to the message list.
  - **Viewing Message Details**
    - Each message on the homepage has an "Details" link that redirects users to a detailed page showing the message text and other details.
   
**Storage**

For this simple project, data is temporarily stored in memory (in an array). The messages array is populated when the app starts and new messages are added when users submit the form.
