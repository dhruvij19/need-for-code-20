function getBotResponse(input) {
  if (input == "find a shelter") {
    return "where is your location";
  } else if (input == "bandra") {
    return "what animal are you looking the shelter for?";
  } else if (input == "dog") {
    return "what breed is it?";
  } else if (input == "indie") {
    return "please share your contact info for further info.";
  } else if (input == "1234567891") {
    return "Our executives will contact you shortly!";
  } else {
    return "Try asking something else!";
  }

  //cat

  if (input == "find a shelter") {
    return "where is your location";
  } else if (input == "bandra") {
    return "what animal are you looking the shelter for?";
  } else if (input == "cat") {
    return "what breed is it?";
  } else if (input == "bengal") {
    return "please share your contact info for further info.";
  } else if (input == "1234567891") {
    return "Our executives will contact you shortly!";
  } else {
    return "Try asking something else!";
  }

  // Simple responses

  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "need help") {
    return "what kind of help do you need?";
  } else {
    return "Try asking something else!";
  }
}
