# Image Debugging Instructions

## What We've Added

### 1. Debug Logging in `utils.js`
The `getImageUrl()` function now logs:
- 🖼️ Original image path from API
- 🔧 Normalized path (after removing leading slashes)
- ✅ Final generated URL

### 2. Debug Component on Homepage
A yellow debug box at the top of the homepage shows:
- Actual API response data for members and events
- The image object structure
- The filename value
- The generated URL
- Test images with visual indicators (green border = loaded, red border = failed)

### 3. Console Logging in Components
- `memberscarousel.jsx` logs the members API response
- `events.jsx` logs the events/posts API response

## How to Debug

### Step 1: Open the Application
1. Start your Next.js dev server: `npm run dev`
2. Open http://localhost:3000 in your browser
3. Open Browser Console (Press F12, then click "Console" tab)

### Step 2: Check Console Logs
Look for these logs in the console:

```
📊 Members API Response: [array of member objects]
📸 First member profileImage: {filename: "..."}
🖼️ Original image path: ...
🔧 Normalized path: ...
✅ Final URL: https://doctoratesacademybackend.onrender.com/...
```

### Step 3: Examine the Debug Box
At the top of the homepage, you'll see a gray box with:
- Member image data and test image
- Event image data and test image
- The images will have colored borders:
  - **GREEN border** = Image loaded successfully ✅
  - **RED border** = Image failed to load ❌

### Step 4: Test the Generated URL
1. Copy the "Generated URL" from the debug box
2. Open it in a new browser tab
3. Check if the image loads directly

### Step 5: Common Issues to Check

#### Issue A: Path includes "uploads/" twice
**Example:** `https://doctoratesacademybackend.onrender.com/uploads/uploads/image.jpg`
**Solution:** The API is returning `uploads/image.jpg` but backend expects just `image.jpg`

#### Issue B: Missing "uploads/" folder
**Example:** `https://doctoratesacademybackend.onrender.com/image.jpg`
**Solution:** The API returns `image.jpg` but backend serves from `/uploads/image.jpg`

#### Issue C: Wrong domain
**Example:** URL points to wrong backend
**Solution:** Update BASE_ASSET_URL in utils.js

#### Issue D: CORS or authentication issues
**Example:** Image URL is correct but browser blocks it
**Solution:** Backend needs to allow CORS for images

## What to Report Back

Please provide:

1. **Console logs** showing:
   - What the API returns for `profileImage.filename`
   - What the API returns for `thumbnail_image.filename`
   - The final generated URLs

2. **Debug box information**:
   - Screenshot of the debug box
   - Whether test images have green or red borders

3. **Direct URL test**:
   - Copy a generated URL and paste it in browser
   - Does it load? If not, what error do you see?

4. **Example of working image URL** (if any):
   - If you can find ANY image that loads correctly, share its URL
   - This helps us understand the correct pattern

## Expected Patterns

### Pattern 1: API returns relative path with folder
```javascript
profileImage: {
  filename: "uploads/1234567890.jpg"
}
// Should generate: https://doctoratesacademybackend.onrender.com/uploads/1234567890.jpg
```

### Pattern 2: API returns just filename
```javascript
profileImage: {
  filename: "1234567890.jpg"
}
// Should generate: https://doctoratesacademybackend.onrender.com/uploads/1234567890.jpg
// OR: https://doctoratesacademybackend.onrender.com/1234567890.jpg
```

### Pattern 3: API returns full path with leading slash
```javascript
profileImage: {
  filename: "/uploads/1234567890.jpg"
}
// Should generate: https://doctoratesacademybackend.onrender.com/uploads/1234567890.jpg
```

## After Debugging

Once we know the correct pattern:
1. Update `getImageUrl()` function in `utils.js`
2. Remove the `<ImageDebugger />` component from `page.tsx`
3. Remove console.log statements from production code
4. Test all image types: members, events, posts, gallery, testimonials
