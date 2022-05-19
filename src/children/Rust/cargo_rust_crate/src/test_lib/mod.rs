pub mod methos {
  pub fn slice_string (s:&String) -> & str {
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
      if item == b' ' {
        return &s[0..i]
      }
    }
    return &s[0..]
  }
}