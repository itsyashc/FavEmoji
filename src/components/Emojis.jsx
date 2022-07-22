import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function Emoji(eachEmoji) {
  return (
    <EmojiCard
      key={eachEmoji.id}
      emoji={eachEmoji.emoji}
      name={eachEmoji.name}
      meaning={eachEmoji.meaning}
    />
  );
}

function EmojiEntry() {
  return (
    <div>
      <dl className="dictionary">{emojipedia.map(Emoji)}</dl>
    </div>
  );
}

export default EmojiEntry;
