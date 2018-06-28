#/bin/bash
#upload files
aws s3 cp ./dist s3://nwacricket --recursive --acl public-read