import React, { useState } from "react";
import { TextInput, StyleSheet, View, Modal, Alert } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../shared/colors";

export const NoteInput = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNote, setEnteredNote] = useState("")

  const noteInputHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const noteBodyInputHandler = (enteredText) => {
    setEnteredNote(enteredText)
  }

  const addNoteHandler = () => {
    if (enteredTitle.length === 0) {
      emptyTitleAlert()
    } else {
    props.onAddNote(enteredTitle, enteredNote);
    setEnteredTitle("");
    setEnteredNote("");
    }
  };

  const emptyTitleAlert = () =>
    Alert.alert(
      "Please Add a Note Title",
      "",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    <Modal visible={props.isVisible} animationType="fade">
      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter a Note Title"
          placeholderTextColor={colors.colorLight}
          onChangeText={noteInputHandler}
          style={styles.titleInput}
          maxLength={30}
        />
        <TextInput
          multiline={true}
          numberOfLines={10}
          onChangeText={noteBodyInputHandler}
          placeholder="Enter a Note"
          placeholderTextColor={colors.colorLight}
          style={styles.noteBody}



        />
        <View style={styles.buttonView}>
          <Button
            icon="content-save"
            mode="contained"
            onPress={addNoteHandler}
            style={styles.saveButton}
            compact
          >
            Save Note
          </Button>
          <Button
            icon="cancel"
            mode="contained"
            onPress={cancelHandler}
            labelStyle={{ color: colors.colorDark }}
            style={styles.cancelButton}
            compact
          >
            Cancel Note
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputView: {
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    margin: 5,
    backgroundColor: colors.colorLightTwo,
  },
  cancelButton: {
    margin: 5,
    backgroundColor: colors.colorLight,
    color: "black",
  },
  titleInput: {
    color: colors.colorLightTwo,
  },
  noteBody: {
    backgroundColor: colors.colorDark,
    width: 300,
    borderWidth: 1,
    borderColor: colors.colorLight,
    color: colors.colorLight,
    textAlign: 'left',
    textAlignVertical: 'top',
    padding: 5
  }
});

