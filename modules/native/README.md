1. Install `node-gyp` globally:

    ```npm i -g node-gyp```

2. Create the module with the folllowing structure:
    ```
    #include <node.h>

    namespace demo {

    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::NewStringType;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8(
        isolate, "world", NewStringType::kNormal).ToLocalChecked());
    }

    void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "hello", Method);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

    }
    ```
3. Create the .gyp file with the following structure:
    ```
    {
        'targets': [
            {
                'target_name': name,
                'sources': [ ... ]
            }
        ]
    }
    ```

4. Execute the commands:

    ```node-gyp configure```

    ```node-gyp build```
