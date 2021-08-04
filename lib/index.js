"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var pdf_lib_1 = require("pdf-lib");
var DEFAULTS = {
    lang: 'en',
    title: '',
};
var PdfUtils = /** @class */ (function () {
    // Only `create` should be using `new`. Constructors can't be `async`, so every other caller of
    // `new` needs to call `_loadDoc` also - that would be fragile.
    function PdfUtils(inputFilePath) {
        this.inputFilePath = inputFilePath;
    }
    PdfUtils.create = function (inputFilePath) {
        return __awaiter(this, void 0, void 0, function () {
            var pdfUtil;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pdfUtil = new PdfUtils(inputFilePath);
                        return [4 /*yield*/, pdfUtil._loadDoc()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, pdfUtil];
                }
            });
        });
    };
    PdfUtils.prototype._loadDoc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.doc) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, pdf_lib_1.PDFDocument.load(fs_1.default.readFileSync(this.inputFilePath))];
                    case 1:
                        _a.doc = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.doc];
                }
            });
        });
    };
    // `create` already awaited `_loadDoc`, so use this instead of `doc` to avoid ts error
    PdfUtils.prototype.getDoc = function () {
        return this.doc;
    };
    PdfUtils.prototype.writeFile = function (outputFilePath) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = fs_1.default).writeFileSync;
                        _c = [outputFilePath];
                        return [4 /*yield*/, this.getDoc().save()];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfUtils.prototype.setLanguage = function (lang) {
        if (lang === void 0) { lang = DEFAULTS.lang; }
        this.getDoc().setLanguage(lang);
    };
    PdfUtils.prototype.getLanguage = function () {
        var wrappedLang = this.getDoc().catalog.get(pdf_lib_1.PDFName.of('Lang'));
        return wrappedLang ? wrappedLang.asString() : undefined;
    };
    PdfUtils.prototype.setTitle = function (title) {
        if (title === void 0) { title = DEFAULTS.title; }
        this.getDoc().setTitle(title);
    };
    PdfUtils.prototype.getTitle = function () {
        return this.getDoc().getTitle();
    };
    // ===== STATIC CONVENIENCE METHODS =====
    // To overwrite the input file, use the same value for inputFilePath & outputFilePath.
    /* eslint-disable indent */
    PdfUtils.writeAccessibilityData = function (inputFilePath, outputFilePath, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var pdfUtil;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PdfUtils.create(inputFilePath)];
                    case 1:
                        pdfUtil = _a.sent();
                        pdfUtil.setLanguage(options.language || DEFAULTS.lang);
                        pdfUtil.setTitle(options.title || DEFAULTS.title);
                        return [4 /*yield*/, pdfUtil.writeFile(outputFilePath)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfUtils.readAccessibilityData = function (inputFilePath) {
        return __awaiter(this, void 0, void 0, function () {
            var pdfUtil;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, PdfUtils.create(inputFilePath)];
                    case 1:
                        pdfUtil = _a.sent();
                        return [2 /*return*/, {
                                language: pdfUtil.getLanguage(),
                                title: pdfUtil.getTitle(),
                            }];
                }
            });
        });
    };
    PdfUtils.printAccessibilityData = function (inputFilePath) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Object).entries;
                        return [4 /*yield*/, this.readAccessibilityData(inputFilePath)];
                    case 1:
                        _b.apply(_a, [_c.sent()])
                            .forEach(function (pair) {
                            /* eslint-disable no-console */
                            console.log(pair[0] + ": " + JSON.stringify(pair[1]));
                            /* eslint-enable no-console */
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return PdfUtils;
}());
exports.default = PdfUtils;
