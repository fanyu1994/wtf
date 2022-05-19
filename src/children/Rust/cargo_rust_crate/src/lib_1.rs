pub mod out_mod {
    pub mod mod_1 {
        #[derive(Debug)]
        pub struct User {
            name: String,
            age: u8,
        }
        impl User {
            fn eat(&self) {
                if (self.age > 18) {
                    println!("{}!! ,年龄有些大了!!", self.age)
                } else {
                    println!("{},年龄合适。", self.age)
                }
            }
        }
        pub fn create_user(name: String, age: u8) -> User {
            User { name, age }
        }
    }
    pub mod mod_2 {
        pub fn print_test(s: &String) -> usize {
            let bytes = s.as_bytes();
            for (idx, &item) in bytes.iter().enumerate() {
                if item == b' ' {
                    return idx;
                } else {
                    println!("i: {:#?} -> :{:#?}", idx, item)
                }
            }
            return s.len();
        }
    }
}
