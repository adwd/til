use tokio::fs::File;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

// https://tokio.rs/tokio/tutorial/io
pub async fn async_read_write() -> anyhow::Result<()> {
    println!("AsyncRead");
    {
        let mut f = File::open("test.txt").await?;
        let mut buffer = [0; 4];

        loop {
            let n = f.read(&mut buffer[..]).await?;
            if n == 0 {
                break;
            }
            print!("{}", String::from_utf8_lossy(&buffer[..n]));
        }
    }

    println!("AsyncWrite");
    {
        let mut out = tokio::io::stdout();
        out.write(b"Hello, world!\n").await?;
    }

    {
        let f1 = File::open("test.txt").await?;
        let f2 = File::open("test2.txt").await?;

        let mut handle = f1.chain(f2);
        let mut buffer = String::new();

        handle.read_to_string(&mut buffer).await?;
        println!("{}", buffer);
    }

    Ok(())
}
