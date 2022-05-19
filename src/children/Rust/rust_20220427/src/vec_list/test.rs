pub fn create_vec(num: usize) -> Vec<usize> {
    let mut vec = Vec::new();
    for elem in 0..num {
        vec.push(self_mod::random_number() * elem)
    }
    return vec;
}

mod self_mod {
    use rand::Rng;
    pub fn random_number() -> usize {
        let n = rand::thread_rng().gen_range(1, 101);
        return n;
    }
}
