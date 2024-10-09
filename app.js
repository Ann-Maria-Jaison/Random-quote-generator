const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "Hard times don’t create heroes. It is during the hard times when the 'hero' within us is revealed.",
        author: "Bob Riley"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "It’s not whether you get knocked down, it’s whether you get up.",
        author: "Vince Lombardi"
    },
    {
        quote: "The harder the struggle, the more glorious the triumph.",
        author: "Swami Sivananda"
    },
    {
        quote: "I used to think I was indecisive, but now I’m not so sure.",
        author: "Anonymous"
    },
    {
        quote: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        author: "Anonymous"
    },
    {
        quote: "Why don’t skeletons fight each other? They don’t have the guts.",
        author: "Anonymous"
    },
    {
        quote: "I’m on a whiskey diet. I’ve lost three days already.",
        author: "Anonymous"
    },
    {
        quote: "I’m reading a book on anti-gravity. It’s impossible to put down.",
        author: "Anonymous"
    },
    {
        quote: "My therapist says I have a preoccupation with vengeance. We’ll see about that.",
        author: "Anonymous"
    },
    {
        quote: "I'm not arguing. I’m just explaining why I’m right.",
        author: "Anonymous"
    },
    {
        quote: "I have an inferiority complex, but it’s not a very good one.",
        author: "Anonymous"
    },
    {
        quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
        author: "Anonymous"
    },
    {
        quote: "Sometimes the hardest thing and the right thing are the same.",
        author: "Anonymous"
    },
    {
        quote: "We suffer more in imagination than in reality.",
        author: "Seneca"
    },
    {
        quote: "Time will pass, and you will eventually realize that some people were only meant to stay in your heart, not your life.",
        author: "Anonymous"
    },
    {
        quote: "The world breaks everyone, and afterward, some are strong at the broken places.",
        author: "Ernest Hemingway"
    },
    {
        quote: "We are all broken, that’s how the light gets in.",
        author: "Ernest Hemingway"
    },
    {
        quote: "The saddest thing about betrayal is that it never comes from your enemies.",
        author: "Anonymous"
    },
    {
        quote: "Everyone you meet is fighting a battle you know nothing about.",
        author: "Anonymous"
    },
    {
        quote: "It's sad when you realize you aren’t as important to someone as you thought you were.",
        author: "Anonymous"
    },
    {
        quote: "Sometimes, it’s not the people who change, it’s the mask that falls off.",
        author: "Anonymous"
    },
    {
        quote: "People cry not because they’re weak. It’s because they’ve been strong for too long.",
        author: "Anonymous"
    },
    {
        quote: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Don’t wait. The time will never be just right.",
        author: "Napoleon Hill"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quote: "What we think, we become.",
        author: "Buddha"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "My brain has too many tabs open.",
        author: "Anonymous"
    },
    {
        quote: "I always carry a knife in my purse, just in case we’re having cake.",
        author: "Anonymous"
    },
    {
        quote: "I would lose weight, but I hate losing.",
        author: "Anonymous"
    },
    {
        quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
        author: "Anonymous"
    },
    {
        quote: "I'm not lazy, I'm just on energy-saving mode.",
        author: "Anonymous"
    },
    {
        quote: "Common sense is like deodorant. The people who need it most never use it.",
        author: "Anonymous"
    },
    {
        quote: "If at first you don’t succeed, then skydiving definitely isn’t for you.",
        author: "Anonymous"
    },
    {
        quote: "I'm on a seafood diet. I see food, and I eat it.",
        author: "Anonymous"
    },
    {
        quote: "I’m an acquired taste. If you don’t like me, acquire some taste.",
        author: "Anonymous"
    },
    {
        quote: "Some people are like clouds. When they disappear, it’s a beautiful day.",
        author: "Anonymous"
    },
    {
        quote: "The worst kind of pain is when you're smiling just to stop the tears from falling.",
        author: "Anonymous"
    },
    {
        quote: "People are lonely because they build walls instead of bridges.",
        author: "Anonymous"
    },
    {
        quote: "Some people come into your life just to teach you how to let go.",
        author: "Anonymous"
    },
    {
        quote: "No matter how much it hurts now, someday you will look back and realize your struggles changed your life for the better.",
        author: "Anonymous"
    },
    {
        quote: "Not everyone you lose is a loss.",
        author: "Anonymous"
    },
    {
        quote: "The tragedy of life is not death, but what we let die inside of us while we live.",
        author: "Norman Cousins"
    },
    {
        quote: "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
        author: "Bob Marley"
    },
    {
        quote: "We are not given a good or bad life. We are given a life. It’s up to us to make it good or bad.",
        author: "Anonymous"
    },
    {
        quote: "Sometimes you have to accept the fact that certain things will never go back to how they used to be.",
        author: "Anonymous"
    },
    {
        quote: "The saddest part of life is saying goodbye to someone you wish to spend your lifetime with.",
        author: "Anonymous"
    },
    {
        quote: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "If you think nobody cares if you’re alive, try missing a few payments.",
        author: "Anonymous"
    },
    {
        quote: "Life is short. Smile while you still have teeth.",
        author: "Anonymous"
    },
    {
        quote: "Happiness is not the absence of problems; it’s the ability to deal with them.",
        author: "Anonymous"
    },
    {
        quote: "Behind every great man is a woman rolling her eyes.",
        author: "Anonymous"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        author: "Anonymous"
    },
    {
        quote: "A clear conscience is usually the sign of a bad memory.",
        author: "Anonymous"
    },
    {
        quote: "Change is hard at first, messy in the middle, and gorgeous at the end.",
        author: "Robin Sharma"
    }
    // More quotes can be added here if needed
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
}
