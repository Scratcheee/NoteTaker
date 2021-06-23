import React from "react";
import { colors } from "../shared/colors";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Note = (props) => {
  return (
    <View style={styles.noteContainer}>
    <View style={styles.noteHeader}>
      <Text style={styles.noteHeadText}>{props.title}</Text>
      
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>X</Text>
        </View>
      </TouchableOpacity>
    </View>
      <Text style={styles.noteText}>{props.body}</Text>
      </View>

  );
};

export default Note;

const styles = StyleSheet.create({
  noteHeader: {
    
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noteContainer: {
    backgroundColor: colors.backgroundColor,
    margin: 2,
    borderColor: colors.colorLightTwo,
    borderWidth: 1.5,
    padding: 2,
  },
  noteHeadText: {
    color: colors.colorLight,
    fontWeight: "bold",
    borderBottomColor: colors.colorDark,
    borderBottomWidth: 1
  },
  noteText: {
    color: colors.colorLightTwo,
  },
  deleteButton: {
    backgroundColor: colors.colorLight,
    width: 20,
    height: 20,
    alignItems: "center",
    borderColor: colors.colorDark,
    borderWidth: 1,
    borderRadius: 3,
  },
  deleteButtonText: {
    color: colors.colorDark,
  },
});
