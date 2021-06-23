import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Note from "./src/components/Note";
import { NoteInput } from "./src/components/NoteInput";
import { Button } from "react-native-paper";
import { colors } from "./src/shared/colors";

export default function App() {
  const [isAddNote, setIsAddNote] = useState(false);
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (title, note) => {
    setNotes((currentNotes) => [
      ...currentNotes,
      { id: Math.random().toString(), value: title, body: note },
    ]);
    setIsAddNote(false);
  };

  const cancelNoteHandler = () => {
    setIsAddNote(false);
  };

  const removeNote = (noteId) => {
    setNotes((currentNotes) => {
      return currentNotes.filter((note) => note.id !== noteId);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        icon="note"
        onPress={() => setIsAddNote(true)}
        style={styles.addNoteButton}
      >
        Add A Note
      </Button>
      <NoteInput
        isVisible={isAddNote}
        onCancel={cancelNoteHandler}
        onAddNote={addNoteHandler}
      />
      <FlatList
        data={notes}
        renderItem={(itemData) => (
          <Note
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeNote}
            body={itemData.item.body}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: colors.colorDarkTwo,
    flex: 1,
  },
  addNoteButton: {
    backgroundColor: colors.colorLightTwo,
  },
});

//TODO: Create way to edit note