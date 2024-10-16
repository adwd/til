use std::{fs::File, io::Read, io::Write};

fn main() {
    reader_writer().unwrap();
}

fn reader_writer() -> anyhow::Result<()> {
    println!("Read");
    {
        let mut f = File::open("test.txt")?;
        read(&mut f)?;
    }

    println!("Write");
    {
        let mut f = std::io::stdout();
        let buf = b"Hello, world!\n";
        write(&mut f, buf)?;
    }

    Ok(())
}

fn read<R: Read>(mut r: R) -> anyhow::Result<()> {
    let mut buffer = [0; 16];
    loop {
        let n = r.read(&mut buffer)?;
        if n == 0 {
            break;
        }
        print!("{}", String::from_utf8_lossy(&buffer[..n]));
    }

    Ok(())
}

fn write<W: Write>(w: &mut W, buf: &[u8]) -> anyhow::Result<()> {
    w.write(buf)?;

    Ok(())
}
