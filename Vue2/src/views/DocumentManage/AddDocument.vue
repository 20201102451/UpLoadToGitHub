<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="选择文件">
                <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" drag>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                </el-upload>
            </el-form-item>
            <el-form-item label="过期时间" prop="expirationTime">
                <el-select v-model="form.expirationTime" placeholder="请选择">
                    <el-option label="7天" value="7"></el-option>
                    <el-option label="一个月" value="30"></el-option>
                    <el-option label="不过期" value="9999"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item> -->
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>


<script>
export default {
    data() {
        return {
            dialogVisible: false,
            fileList: [],
            form: {
                date1: '',
                date2: '',
                expirationTime:''
            }
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        onSubmit() {
            console.log('submit!');
        }
    }
};
</script>

<style scoped>
.line {
    text-align: center;
}
</style>