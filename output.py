import re

def update_js_file(new_service_id, new_owner_id):
    with open('./src/skapi_temp.js', 'r') as file:
        content = file.read()

    pattern = r"Skapi\(\s*['\"]([^'\"]*)['\"]\s*,\s*['\"]([^'\"]*)['\"]\s*\)"

    new_content = re.sub(pattern, f"Skapi('{new_service_id}', '{new_owner_id}')", content)

    with open('./src/skapi.js', 'w') as file:
        file.write(new_content)

    print(f"Updated 'skapi.js' with service_id: {new_service_id} and owner_id: {new_owner_id}")

update_js_file('new_service_id', 'new_owner_id')
