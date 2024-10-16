use std::io::{self, prelude::*, stdout, BufReader, BufWriter};
use std::{fs::File, io::Read, io::Write};

use async_read_write::async_read_write;
mod async_read_write;

#[tokio::main]
async fn main() {
    reader_writer().unwrap();
    async_read_write().await.unwrap();
}

// https://doc.rust-lang.org/std/io/index.html
fn reader_writer() -> anyhow::Result<()> {
    println!("Read");
    {
        let mut f = File::open("test.txt")?;
        read(&mut f)?;
    }

    println!("Write");
    {
        let mut f = stdout();
        let buf = b"Hello, world!\n";
        write(&mut f, buf)?;
    }

    println!("BufReader");
    {
        let f = File::open("test.txt")?;
        let reader = BufReader::new(f);
        for line in reader.lines() {
            println!("{}", line?);
        }
    }
    {
        let f = File::open("test.txt")?;
        let mut reader = BufReader::new(f);
        loop {
            let mut buffer = String::new();
            let n = reader.read_line(&mut buffer)?;
            if n == 0 {
                break;
            }
            print!("{}", buffer);
        }
    }

    println!("BufReader as Read");
    {
        let f = File::open("test.txt")?;
        let mut reader = BufReader::new(f);
        read(&mut reader)?;
    }

    println!("BufWriter");
    {
        let f = stdout();
        let mut writer = BufWriter::new(f);
        let buf = b"Hello, world!\n";
        write(&mut writer, buf)?;
    }

    println!("copy");
    {
        let mut f = File::open("test.txt")?;
        let mut out = stdout();
        io::copy(&mut f, &mut out)?;
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
