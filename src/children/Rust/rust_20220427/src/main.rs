mod vec_list;
// use vec_list::test::create_vec;

fn main() {
    let hello = "Здравствуйте";
    for e in hello.chars() {
        println!("cc : {}", e)
    }
    for e in hello.bytes() {
        println!("c: {}", e)
    }
}
