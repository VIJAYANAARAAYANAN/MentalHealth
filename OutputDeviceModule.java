// OutputDeviceModule.java
package com.yourprojectname;

import android.media.AudioDeviceInfo;
import android.media.AudioManager;
import android.os.Build;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OutputDeviceModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public OutputDeviceModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "OutputDeviceModule";
    }

    @ReactMethod
    public void getCurrentOutputDevice(Promise promise) {
        AudioManager audioManager = (AudioManager) reactContext.getSystemService(reactContext.AUDIO_SERVICE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            AudioDeviceInfo[] devices = audioManager.getDevices(AudioManager.GET_DEVICES_OUTPUTS);

            for (AudioDeviceInfo device : devices) {
                if (device.getType() == AudioDeviceInfo.TYPE_BLUETOOTH_A2DP ||
                    device.getType() == AudioDeviceInfo.TYPE_BLUETOOTH_SCO ||
                    device.getType() == AudioDeviceInfo.TYPE_BLUETOOTH_A2DP_HEADPHONES ||
                    device.getType() == AudioDeviceInfo.TYPE_BLUETOOTH_SCO_CARKIT) {
                    promise.resolve("Bluetooth");
                    return;
                } else if (device.getType() == AudioDeviceInfo.TYPE_WIRED_HEADPHONES ||
                           device.getType() == AudioDeviceInfo.TYPE_WIRED_HEADSET) {
                    promise.resolve("Wired");
                    return;
                }
            }
        }

        promise.resolve("Speaker");
    }
}
