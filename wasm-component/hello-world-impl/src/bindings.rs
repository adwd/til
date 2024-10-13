#[allow(dead_code)]
pub mod adwd {
    #[allow(dead_code)]
    pub mod greet {
        #[allow(dead_code, clippy::all)]
        pub mod greetable {
            #[used]
            #[doc(hidden)]
            static __FORCE_SECTION_REF: fn() = super::super::super::__link_custom_section_describing_imports;
            use super::super::super::_rt;
            #[allow(unused_unsafe, clippy::all)]
            pub fn name() -> _rt::String {
                unsafe {
                    #[repr(align(4))]
                    struct RetArea([::core::mem::MaybeUninit<u8>; 8]);
                    let mut ret_area = RetArea([::core::mem::MaybeUninit::uninit(); 8]);
                    let ptr0 = ret_area.0.as_mut_ptr().cast::<u8>();
                    #[cfg(target_arch = "wasm32")]
                    #[link(wasm_import_module = "adwd:greet/greetable")]
                    extern "C" {
                        #[link_name = "name"]
                        fn wit_import(_: *mut u8);
                    }
                    #[cfg(not(target_arch = "wasm32"))]
                    fn wit_import(_: *mut u8) {
                        unreachable!()
                    }
                    wit_import(ptr0);
                    let l1 = *ptr0.add(0).cast::<*mut u8>();
                    let l2 = *ptr0.add(4).cast::<usize>();
                    let len3 = l2;
                    let bytes3 = _rt::Vec::from_raw_parts(l1.cast(), len3, len3);
                    _rt::string_lift(bytes3)
                }
            }
            #[allow(unused_unsafe, clippy::all)]
            pub fn greet(name: &str) -> _rt::String {
                unsafe {
                    #[repr(align(4))]
                    struct RetArea([::core::mem::MaybeUninit<u8>; 8]);
                    let mut ret_area = RetArea([::core::mem::MaybeUninit::uninit(); 8]);
                    let vec0 = name;
                    let ptr0 = vec0.as_ptr().cast::<u8>();
                    let len0 = vec0.len();
                    let ptr1 = ret_area.0.as_mut_ptr().cast::<u8>();
                    #[cfg(target_arch = "wasm32")]
                    #[link(wasm_import_module = "adwd:greet/greetable")]
                    extern "C" {
                        #[link_name = "greet"]
                        fn wit_import(_: *mut u8, _: usize, _: *mut u8);
                    }
                    #[cfg(not(target_arch = "wasm32"))]
                    fn wit_import(_: *mut u8, _: usize, _: *mut u8) {
                        unreachable!()
                    }
                    wit_import(ptr0.cast_mut(), len0, ptr1);
                    let l2 = *ptr1.add(0).cast::<*mut u8>();
                    let l3 = *ptr1.add(4).cast::<usize>();
                    let len4 = l3;
                    let bytes4 = _rt::Vec::from_raw_parts(l2.cast(), len4, len4);
                    _rt::string_lift(bytes4)
                }
            }
        }
    }
}
#[allow(dead_code)]
pub mod exports {
    #[allow(dead_code)]
    pub mod adwd {
        #[allow(dead_code)]
        pub mod greet {
            #[allow(dead_code, clippy::all)]
            pub mod sayable {
                #[used]
                #[doc(hidden)]
                static __FORCE_SECTION_REF: fn() = super::super::super::super::__link_custom_section_describing_imports;
                use super::super::super::super::_rt;
                #[doc(hidden)]
                #[allow(non_snake_case)]
                pub unsafe fn _export_say_cabi<T: Guest>() -> *mut u8 {
                    #[cfg(target_arch = "wasm32")] _rt::run_ctors_once();
                    let result0 = T::say();
                    let ptr1 = _RET_AREA.0.as_mut_ptr().cast::<u8>();
                    let vec2 = (result0.into_bytes()).into_boxed_slice();
                    let ptr2 = vec2.as_ptr().cast::<u8>();
                    let len2 = vec2.len();
                    ::core::mem::forget(vec2);
                    *ptr1.add(4).cast::<usize>() = len2;
                    *ptr1.add(0).cast::<*mut u8>() = ptr2.cast_mut();
                    ptr1
                }
                #[doc(hidden)]
                #[allow(non_snake_case)]
                pub unsafe fn __post_return_say<T: Guest>(arg0: *mut u8) {
                    let l0 = *arg0.add(0).cast::<*mut u8>();
                    let l1 = *arg0.add(4).cast::<usize>();
                    _rt::cabi_dealloc(l0, l1, 1);
                }
                pub trait Guest {
                    fn say() -> _rt::String;
                }
                #[doc(hidden)]
                macro_rules! __export_adwd_greet_sayable_cabi {
                    ($ty:ident with_types_in $($path_to_types:tt)*) => {
                        const _ : () = { #[export_name = "adwd:greet/sayable#say"] unsafe
                        extern "C" fn export_say() -> * mut u8 { $($path_to_types)*::
                        _export_say_cabi::<$ty > () } #[export_name =
                        "cabi_post_adwd:greet/sayable#say"] unsafe extern "C" fn
                        _post_return_say(arg0 : * mut u8,) { $($path_to_types)*::
                        __post_return_say::<$ty > (arg0) } };
                    };
                }
                #[doc(hidden)]
                pub(crate) use __export_adwd_greet_sayable_cabi;
                #[repr(align(4))]
                struct _RetArea([::core::mem::MaybeUninit<u8>; 8]);
                static mut _RET_AREA: _RetArea = _RetArea(
                    [::core::mem::MaybeUninit::uninit(); 8],
                );
            }
        }
    }
}
mod _rt {
    pub use alloc_crate::string::String;
    pub use alloc_crate::vec::Vec;
    pub unsafe fn string_lift(bytes: Vec<u8>) -> String {
        if cfg!(debug_assertions) {
            String::from_utf8(bytes).unwrap()
        } else {
            String::from_utf8_unchecked(bytes)
        }
    }
    #[cfg(target_arch = "wasm32")]
    pub fn run_ctors_once() {
        wit_bindgen_rt::run_ctors_once();
    }
    pub unsafe fn cabi_dealloc(ptr: *mut u8, size: usize, align: usize) {
        if size == 0 {
            return;
        }
        let layout = alloc::Layout::from_size_align_unchecked(size, align);
        alloc::dealloc(ptr, layout);
    }
    extern crate alloc as alloc_crate;
    pub use alloc_crate::alloc;
}
/// Generates `#[no_mangle]` functions to export the specified type as the
/// root implementation of all generated traits.
///
/// For more information see the documentation of `wit_bindgen::generate!`.
///
/// ```rust
/// # macro_rules! export{ ($($t:tt)*) => (); }
/// # trait Guest {}
/// struct MyType;
///
/// impl Guest for MyType {
///     // ...
/// }
///
/// export!(MyType);
/// ```
#[allow(unused_macros)]
#[doc(hidden)]
macro_rules! __export_hello_world_impl {
    ($ty:ident) => {
        self::export!($ty with_types_in self);
    };
    ($ty:ident with_types_in $($path_to_types_root:tt)*) => {
        $($path_to_types_root)*::
        exports::adwd::greet::sayable::__export_adwd_greet_sayable_cabi!($ty
        with_types_in $($path_to_types_root)*:: exports::adwd::greet::sayable);
    };
}
#[doc(inline)]
pub(crate) use __export_hello_world_impl as export;
#[cfg(target_arch = "wasm32")]
#[link_section = "component-type:wit-bindgen:0.31.0:adwd:greet:hello-world:encoded world"]
#[doc(hidden)]
pub static __WIT_BINDGEN_COMPONENT_TYPE: [u8; 265] = *b"\
\0asm\x0d\0\x01\0\0\x19\x16wit-component-encoding\x04\0\x07\x87\x01\x01A\x02\x01\
A\x04\x01B\x04\x01@\0\0s\x04\0\x04name\x01\0\x01@\x01\x04names\0s\x04\0\x05greet\
\x01\x01\x03\x01\x14adwd:greet/greetable\x05\0\x01B\x02\x01@\0\0s\x04\0\x03say\x01\
\0\x04\x01\x12adwd:greet/sayable\x05\x01\x04\x01\x16adwd:greet/hello-world\x04\0\
\x0b\x11\x01\0\x0bhello-world\x03\0\0\0G\x09producers\x01\x0cprocessed-by\x02\x0d\
wit-component\x070.216.0\x10wit-bindgen-rust\x060.31.0";
#[inline(never)]
#[doc(hidden)]
pub fn __link_custom_section_describing_imports() {
    wit_bindgen_rt::maybe_link_cabi_realloc();
}
